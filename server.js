var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8000;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and give server access to them
var routes = require ("./controllers/burgers_controller");
app.use(routes);

// start server so that it can begin listening to client request
app.listen(PORT, function(){
  console.log("Server listening on: http://localhost:" +PORT)
});