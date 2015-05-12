var port = 3030;

var WebSocketServer = require('ws').Server,
    io = new WebSocketServer({port: port});

console.log('server start at port %d', 3030);

io.broadcast = function broadcast(data) {
    io.clients.forEach(function each(client) {
        //var id;
        //try {
        //    id = JSON.parse(data).id;
        //} catch (e) {
        //
        //}
        //if (id !== 'socket_id_' + client._ultron.id) {
        //    client.send(data);
        //}

        client.send(data);
    });
};

io.on('connection', function (socket) {

    socket.on('open', function open() {
        console.log('open');
    });

    socket.on('message', function (message) {
        var data = message;
        try {
            data = JSON.parse(message);
        } catch (e) {

        }
        switch (data.type) {
            case 'add message':
                data.type = 'add to ul';
                if (!data.id) {
                    data.id = 'socket_id_' + socket._ultron.id;
                }
                io.broadcast(JSON.stringify(data));

                data.me = 'me';
                socket.send(JSON.stringify(data));
                break;
        }
    });

    socket.on('close', function () {
        var id = 'socket_id_' + socket._ultron.id;
        var data = {
            type: 'remover person',
            id: id
        };
        io.broadcast(JSON.stringify(data));
    });
});