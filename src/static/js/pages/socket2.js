window.onload = function () {

    var num_mes = 0;
    var html = document.getElementsByTagName('html')[0];
    var socket = function () {
        var ip = document.getElementById('MAIN_APP').getAttribute('ip_md5');
        var socket_id = null;
        var random = ip;
        var user_random = '(' + random.slice(0, 4) + ')';
        var form = document.getElementById('write_form');
        var message = document.getElementById('message');
        var user_list = document.getElementById('user_list');
        var host = form.getAttribute('host');
        var user = form.getAttribute('user');
        var show_user = user + user_random;
        var input = document.getElementById('write_input');
        var out_socket;

        var protocol = window.location.protocol;
        var ws_protocol = (protocol === 'https:') ? 'wss' : 'ws';


        if (!user) {
            user = prompt('请输入你的昵称！');
            show_user = user + user_random;
        }


        var new_socket = function () {
            var url;
            url = ws_protocol + host;
            var socket = new WebSocket(url);
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
                            num_mes++;
                            if (html.classList.contains('hidden')) {
                                document.title = '你有' + num_mes + '条新消息喔～～'
                            }
                        };

                        var addPerson = function () {
                            var addRightPerson = function () {
                                var li = document.createElement('li');
                                li.classList.add('nowrap');
                                li.id = data.new_id;
                                li.setAttribute('data-id', data.id);
                                li.innerHTML = data.user;
                                user_list.appendChild(li);
                            };
                            var new_id = document.getElementById(data.new_id);
                            if (new_id) {
                                if (new_id.getAttribute('data-id') !== data.id) {
                                    new_id.setAttribute('data-id', data.id);
                                }
                                return;
                            } else {
                                addRightPerson();
                                if (data.me === 'me') {
                                    document.getElementById(data.new_id).classList.add('me');
                                }
                            }
                        };
                        addMessage();
                        addPerson();

                        break;
                    case 'remover person':
                        var remove = document.querySelector('[data-id="' + data.id +'"]');
                        if (remove) {
                            remove.remove();
                        }
                }
            });

            socket.addEventListener('close', function () {
                console.log('close');

                setTimeout(function () {
                    try {
                        out_socket = new_socket();
                        console.log('reopen');
                    } catch (e) {

                    }
                }, 1000);
            });
            return socket;
        };

        out_socket = new_socket();
        form.addEventListener('submit', function (e) {
            if (!user) {
                user = prompt('请输入你的昵称！');
                show_user = user + user_random;
            }
            if (!user) {
                user = '大傻逼';
                show_user = user + user_random;
            }

            var data = {
                type: 'add message',
                user: show_user,
                msg: input.value
            };
            socket_id = 'id' + random + user;
            data.new_id = socket_id;
            out_socket.send(JSON.stringify(data));
            input.value = '';
            e.preventDefault();
        });
    };

    socket();

    document.addEventListener('visibilitychange', function () {

        var state = document.visibilityState;
        if (state === 'hidden') {
            document.title = '点我啊，草泥马！！';
            if (html.classList.contains('visible')) {
                html.classList.remove('visible');
            }
            html.classList.add('hidden');
            num_mes = 0;
        }
        if (state === 'visible') {
            document.title = document.getElementById('MAIN_APP').getAttribute('title') + '--darlin.me';
            if (html.classList.contains('hidden')) {
                html.classList.remove('hidden');
            }
            html.classList.add('visible');
        }
    });
};