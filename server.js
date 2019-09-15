var express = require("express");
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routes we'll be using
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);















// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });