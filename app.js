import express from "express";
import path from "path";
import axios from "axios";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 3000;
const SERVER_URL = "http://127.0.0.1:1818/auths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.get("/login/kakao", async (req, res) => {
    try {
        const response = await axios.get(`${SERVER_URL}/login/kakao`);
        res.redirect(response.data.login_url);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/login/kakao/auths/callback", async (req, res) => {
    const request = req.query;
    const code    = request.code;
    const state   = request.state;

    if (!code) {
        return res.status(400).send("Authorization code is missing");
    } else if (!state) {
        return res.status(400).send("Authorization state is missing");
    }

    try {
        const response = await getLoginKaKaoCallback(code, state);

        if (!response) {
            return res.status(500).send("Response is null");
        }

        return res.redirect(response.is_member ? "/history" : "/join");
    } catch (error) {
        res.status(500).send(error);
    }
});

async function getLoginKaKaoCallback(code, state) {
    try {
        const response = await axios.post(
            `${SERVER_URL}/login/kakao/callback/`,
            {
                code, 
                state,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

app.get("/join/kakao", async (req, res) => {
    try {
        const csrfResponse = await apiEx.get('/auths/login/get/csrf/');
        const csrfToken = csrfResponse.data.csrfToken;
        const response = await getJoinKaKaoCallback(csrfToken);
    
        if (!response) {
            return res.status(500).send("Response is null");
        }

        return res.redirect("/onboarding");
    } catch (error) {
        res.status(500).send(error);
    }
});

async function getJoinKaKaoCallback(csrfToken) {
    try {
        const response = await axios.get(
            `${SERVER_URL}/login/kakao/consent/`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-Token": csrfToken,
                },
                withCredentials: true,
            },
        );

        return response.data;
    } catch (error) {
        throw error;
    }
}

app.get("/*", (req, res) => {
    const fileName = req.params[0] ? req.params[0] : "index";
    res.sendFile(path.join(__dirname, "dist", `${fileName}.html`));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
