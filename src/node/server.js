var http = require('http');
var app = http.createServer();

var io = require('socket.io')(app);

app.listen(3000);

io.sockets.on('connection', function(socket){
  console.log('a user connected');

  socket.on('add data', function(msg){
    console.log('message: ' + msg.msg);

    socket.emit('add to ul', msg);
    socket.broadcast.emit('add to ul', msg);

  });

});