// config app general / modules
const express = require("express");
const app = express();
const Files = require("fileworkdiokou");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { PORT, DB_URI_WEB, DB_URI } = process.env;
const upload = require("./api/uploads/upload").handleFile;

// configuration app express
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// config files statics
app.use(express.static('views'));
// connect mongodb database
mongoose.connect(DB_URI_WEB)
  .then((connect) => {
    console.log("Connected database");
    bootstrap();
  })
  .catch((error) => {
    console.log("Error connectig database ! 2 " + error);
  });
//   function boostrap application
function bootstrap() {
  // th rest of app
  var routes = Files.walk(__dirname + "/api/modules");   
  //IMPORT THE PUBLIC ROUTES
  for (var i = 0; i < routes.length; i++)
    if ( routes[i].indexOf("routes") !== -1 && routes[i].indexOf("routes.public") != -1 ) {
      require(routes[i])(app);
    }
    app.get("/", (req, res) => {
    // res.send("Welcome to api for assignement week 5 !");
    res.sendFile("views/index.html");
  });
    // add auth gard 
    require('./api/modules/auth/auth.gard')(app);
    // Import private routes 
    for (var i = 0; i < routes.length; i++)
    if ( routes[i].indexOf("routes") !== -1 && routes[i].indexOf("routes.public") == -1 ) {
      require(routes[i])(app);
    }
  app.listen(PORT, function () {
    console.log("server listening  on port " + PORT + " ! ");
  });
}
