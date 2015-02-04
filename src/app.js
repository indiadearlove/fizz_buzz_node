var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

var Game = require('./game');

app.get('/', function(request, response){
  var mygame = new Game();
  console.log(mygame.score);  
  response.send(mygame.score.toString());
});


server.listen('8080', function(){
  console.log('listening 8080')
});