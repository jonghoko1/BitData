module.exports = {
    apps: [
        {
            name: 'bitdata',
            script: 'server.js',
            watch: true,
            env: {
                NODE_ENV: "production",
                PORT: 8080
            }
        },
    ],
};  