window.onload = function () {
    var protocol = window.location.protocol;
    var form = document.getElementById('write_form');
    var message = document.getElementById('message');
    var user_list = document.getElementById('user_list');
    var host = form.getAttribute('host');
    var user = form.getAttribute('user');
    var socket = io.connect(protocol + host);
    var input = document.getElementById('write_input');


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
        socket.emit('send message', {
            user: user,
            id: socket.id,
            msg: input.value
        });
        input.value = '';
        e.preventDefault();
    });

    socket.on('add to ul', function (data) {
        var li = document.createElement('li');
        li.classList.add('each-message');
        var template =
                '<span class="left username">' + data.user + ':</span>' +
                '<span class="right content">' + data.msg + '</span>';
        li.innerHTML = template;
        message.appendChild(li);
    });

    socket.on('add person', function (data) {
        if (document.getElementById(data.id)) {
            return;
        } else {
            var li = document.createElement('li');
            li.classList.add('nowrap');
            li.id = data.id;
            li.innerHTML = data.user;
            user_list.appendChild(li);
        }
    });

    socket.on('remove person', function (data) {
        var remove = document.getElementById(data);
        if (remove) {
            remove.remove();
        }
    });

    document.addEventListener('visibilitychange', function() {
        var state = document.visibilityState;
        if (state === 'hidden') {
            document.title = '点我啊，草泥马！！';
        }
        if (state === 'visible') {
            document.title = document.getElementById('MAIN_APP').getAttribute('title') + '--darlin.me';
        }
    });
};

