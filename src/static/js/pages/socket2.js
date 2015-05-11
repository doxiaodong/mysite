window.onload = function () {

    var socket = function () {
        var form = document.getElementById('write_form');
        var message = document.getElementById('message');
        var user_list = document.getElementById('user_list');
        var host = form.getAttribute('host');
        var user = form.getAttribute('user');
        var input = document.getElementById('write_input');

        var first_socket = true;
        var protocol = window.location.protocol;
        var ws_protocol = (protocol === 'https:') ? 'wss' : 'ws';
        var socket = new WebSocket(ws_protocol + host);

        if (!user) {
            user = prompt('请输入你的昵称！');
        }

        form.addEventListener('submit', function (e) {
            if (!user) {
                user = prompt('请输入你的昵称！');
            }
            if (!user) {
                user = '大傻逼';
            }
            var data = JSON.stringify({
                type: 'add message',
                user: user,
                msg: input.value
            });
            socket.send(data);
            input.value = '';
            e.preventDefault();
        });

        socket.addEventListener('open', function () {
            console.log('open');
        });

        socket.addEventListener('message', function (e) {
            var data = e.data;
            try {
                data = JSON.parse(data);
            } catch (e) {

            }
            switch (data.type) {
                case 'add to ul':
                    var addMessage = function () {

                        var li = document.createElement('li');
                        li.classList.add('each-message');
                        var template =
                            '<span class="left username">' + data.user + ':</span>' +
                            '<span class="right content">' + data.msg + '</span>';
                        li.innerHTML = template;
                        message.appendChild(li);
                    };

                    var addPerson = function () {
                        var addRightPerson = function() {
                            var li = document.createElement('li');
                            li.classList.add('nowrap');
                            li.id = data.id;
                            li.innerHTML = data.user;
                            user_list.appendChild(li);
                        };
                        if (document.getElementById(data.id)) {
                            return;
                        } else {
                            if (data.me === 'me') {
                                if (first_socket) {
                                    addRightPerson();
                                    document.getElementById(data.id).classList.add('me');
                                    first_socket = false;
                                }
                            } else {
                                addRightPerson();
                            }
                        }
                    };

                    addMessage();
                    addPerson();

                    break;
                case 'remover person':
                    var remove = document.getElementById(data.id);
                    if (remove) {
                        remove.remove();
                    }
            }
        });

        socket.addEventListener('close', function () {
            console.log('close');

            setTimeout(function() {
                socket = new WebSocket(ws_protocol + host);
            }, 1000);
        });
    };

    socket();

    document.addEventListener('visibilitychange', function () {
        var state = document.visibilityState;
        if (state === 'hidden') {
            document.title = '点我啊，草泥马！！';
        }
        if (state === 'visible') {
            document.title = document.getElementById('MAIN_APP').getAttribute('title') + '--darlin.me';
        }
    });
};