import express from "express";
import session from "express-session";
import path from "path";
import axios from "axios";
import { fileURLToPath } from "url";

const app = express();

const PORT = process.env.PORT || 3000;
const SERVER_URL = "http://localhost/auths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "dist")));

app.use(
    session({
        secret: "my_secret_key",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

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

        req.session.sessionKey = response.session_key;

        const redirectUrl = getRedirectByMemberState();
        return res.redirect(redirectUrl);
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

function getRedirectByMemberState(response) {
    if (!response.isMember) { // 비회원
        return "/join";
    }
    if (!response.hasBinanceKey) { // 회원 > 바이낸스 키 없음 
        return "/onboarding";
    }
    if (response.hasBinanceKey) { // 회원 > 바이낸스 키 있음
        return "/collect";
    }
    
    throw new Error("Unexpected member state in response");
}

app.get("/join/kakao", async (req, res) => {
    try {
        const sessionKey = req.session?.sessionKey;
        
        if (!sessionKey) {
            return res.status(401).send("Session key is missing or expired");
        }

        const response = await getJoinKaKaoCallback(sessionKey);

        if (!response) {
            return res.status(500).send("Response is null");
        }

        return res.redirect("/onboarding");
    } catch (error) {
        res.status(500).send(error.message || "Internal Server Error");
    }
});

async function getJoinKaKaoCallback(sessionKey) {
    try {
        const response = await axios.post(
            `${SERVER_URL}/login/kakao/consent/`,
            {
                session_key: sessionKey
            },
            {
                headers: {
                    "Content-Type": "application/json",
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
