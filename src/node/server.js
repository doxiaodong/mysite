var http = require('http');
var app = http.createServer();

var io = require('socket.io')(app);

app.listen(3030);

io.sockets.on('connection', function (socket) {

    socket.on('send message', function (data) {

        socket.emit('add to ul', data);
        socket.broadcast.emit('add to ul', data);

        socket.emit('add person', data);
        socket.broadcast.emit('add person', data);
    });
    socket.on('disconnect', function (data) {
        console.log(data, socket.id);
        socket.emit('remove person', socket.id);
        socket.broadcast.emit('remove person', socket.id);
    });

});