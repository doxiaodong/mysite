window.onload = function () {
    var form = document.getElementById('write_form');
    var message = document.getElementById('message');
    var host = form.getAttribute('host');
    var user = form.getAttribute('user');
    var socket = io.connect(host);
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
            msg: input.value
        });
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
};

