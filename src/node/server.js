var http = require('http');
var app = http.createServer();

var io = require('socket.io')(app);

app.listen(3030);

io.sockets.on('connection', function (socket) {

    socket.emit('add to ul', {
        user: '毒枭东',
        msg: 'Hi!你们好呀～'
    });
    socket.on('send message', function (data) {

        socket.emit('add to ul', data);
        socket.broadcast.emit('add to ul', data);

    });

});