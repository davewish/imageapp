const express = require("express");
const config = require("../configs/config");
app = express();

app.set("port", process.env.PORT || 3300);
app.set("views", __dirname + "/views");
app = config(app);
//app starts
app.listen(app.get("port"), function() {
  console.log("Server up: http://localhost:" + app.get("port"));
});
