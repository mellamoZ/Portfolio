const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

var apiKey = "8ae0f4c91a8fdf78b0ae89de12e40ddd-us9"; //Here your API key from Mailchimp
var listID = "139f29e084"; //Here your list id

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const Subject = req.body.subject;
  const email = req.body.email;
  const message = req.body.msg;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          SUBJECT: Subject,
          MSG: message,
        },
      },
    ],
  };

  var jsonData = JSON.stringify(data);
  const url = "https://us9.api.mailchimp.com/3.0/lists/" + listID;

  const options = {
    method: "POST",
    auth: "Abdulaziz:" + apiKey,
  };

  const request = https.request(url, options, function (response) {
    // console.log(jsonData);
    response.on("data", function (data) {
      if (response.statusCode === 200) {
        res.sendFile(__dirname + "/success.html");
      } else {
        res.sendFile(__dirname + "/failure.html");
      }
    });
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.post("/success", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000");
});
