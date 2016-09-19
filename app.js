var express = require("express");
var app = express();

app.use(express.static("public"));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000, function() {
  console.log('Chat app is listening on port 3000!');
});
