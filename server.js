// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
const express = require("express");
const app = express();

const jsonData = {count: 12, message: 'hey'};

app.get("/data", (req, res) => {
    res.json(jsonData);
})
    .get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html", err => {
            if (err) res.status(500).send(err);
        });
    })
    .listen(3000, () => {console.log("listening on port 3000")});
