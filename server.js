/* adding a server.js here for Azure hosting. 
See https://parveensingh.com/next-js-deployment-on-azure-app-service/#adding-server-js-file
this server.js file is launched by iisnode when the web.config is encountered by Azure Web App Service
*/

const { createServer } = require("http");
// const express = require('express') (Only if you app uses express)
const next = require("next");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on <http://localhost>:${port}`);
    });
});