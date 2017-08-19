var express = require('express');
var server = express()
var jonathan = require('./me.json')

server.get('/', function(request, response){
  response.send("hoo ha")
})
server.get('/jonathan', function(request, response){
  response.json(jonathan)
})
server.get('*', function(request, response){
  response.status(404)
  response.send('404 bro')
})
server.listen(3000)
