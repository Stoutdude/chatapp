var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set("views", "./views");
app.set('view engine', 'jade');

app.use(express.static("public"));
app.use(express.static("node_modules/bootstrap/dist"));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function (req, res, next) {
//   console.log(`Request: ${req.url}`);
//   next();
// });

app.get('/', function (req, res) {
  res.render("index", { title: "Home" });
});

var adminRouter = require("./admin");
app.use("/admin", adminRouter);


app.listen(3000, function () {
  console.log('Chat app is listening on port 3000!');
});
