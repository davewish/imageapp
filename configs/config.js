const path = require("path");
const routes = require("../server/routes");
const exphbs = require("express-handlebars");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const methodOverride = require("method-override");
const errorHandler = require("errorhandler");
const moment = require("moment");

module.exports = function(app) {
  app.use(morgan("dev"));
  app.use(bodyParser.urlencoded({ extended: "true" }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser("123456"));
  routes(app);
  app.use("/public/", express.static(path.join(__dirname, "../public")));
  if ("development" === app.get("env")) {
    app.use(errorHandler);
  }

  app.engine(
    "handlebars",
    exphbs.create({
      defaultLayout: "main",
      layoutsDir: app.get("views") + "/layouts",
      partialsDir: [app.get("views") + "/partials"],
      helpers: {
        timeago: function(timestamp) {
          return moment(timestamp)
            .startOf("minute")
            .fromNow();
        }
      }
    }).engine
  );
  app.set("view engine", "handlebars");
  return app;
};
