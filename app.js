const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const { response } = require("express");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.static("public"));
app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
    const name = req.body.name;
    const email = req.body.email;
    const password  = req.body.password;

    console.log("Name: " + name + " email: " + email + " password " + password);
;})

app.listen(port, function () {
    console.log("server is running on port " + port);
})