window.addEventListener('load', function () {

    var num_mes = 0;
    var html = document.getElementsByTagName('html')[0];
    var socket = function () {
        var ip = document.getElementById('MAIN_APP').getAttribute('ip_md5');
        var socket_id = null;
        var random = ip;
        var user_color = '#' + parseInt(random.replace(/^0+/, '').slice(0, 6), 36).toString(16).slice(0, 6);
        var form = document.getElementById('write_form');
        var message = document.getElementById('message');
        var user_list = document.getElementById('user_list');
        var host = form.getAttribute('host');
        var user = form.getAttribute('user');
        var input = document.getElementById('write_input');
        var out_socket;

        var protocol = window.location.protocol;
        var ws_protocol = (protocol === 'https:') ? 'wss' : 'ws';


        if (!user) {
            user = prompt('请输入你的昵称！');
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
                            //li.style.color = data.color;
                            var template =
                                '<span style="color: ' + data.color + '" class="left username nowrap" title="' + data.user + '">' + data.user + ':</span>' +
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
                                li.style.color = data.color;
                                li.setAttribute('data-id', data.id);
                                li.setAttribute('title', data.user);
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
                        var remove = document.querySelector('[data-id="' + data.id + '"]');
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
            }
            if (!user) {
                user = '大傻逼';
            }

            var data = {
                type: 'add message',
                user: user,
                color: user_color,
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

    var ua = navigator.userAgent;
    var platform = {
        isMobile: ua.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i) && ua.match(/Mobile/i) !== null,
        isSafari: ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') == -1
    };
    if (platform.isMobile || platform.isSafari) {

    } else {
        (function () {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];
            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        }, timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
        })();

        var Fire = (function () {
            var fcanvas = document.createElement('canvas');
            fcanvas.id = 'myCanvas';
            document.getElementsByTagName('body')[0].appendChild(fcanvas);
            // think from http://www.html5tricks.com/demo/html5-canvas-fire-animation/index.html
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");

            //Make the canvas occupy the full page
            var W, H;

            var particles = [];
            var mouse = {};
            var init = function () {
                resize();
                //Lets create some particles now
                var particle_count = 50;
                for (var i = 0; i < particle_count; i++) {
                    particles.push(particle());
                }
                var len = particles.length;
                window.addEventListener('mousemove', track_mouse, false);
                window.addEventListener('resize', resize);
                var interval = function () {
                    draw(len);
                    window.requestAnimationFrame(interval);
                };
                interval();
            };

            function track_mouse(e) {
                //since the canvas = full page the position of the mouse
                //relative to the document will suffice
                mouse.x = e.pageX;
                mouse.y = e.pageY;
            }

            function resize() {
                W = window.innerWidth;
                H = window.innerHeight;
                canvas.width = W;
                canvas.height = H;
            }

            function particle() {

                var self = {};
                //speed, life, location, life, colors
                //speed.x range = -5 to 5
                //speed.y range = -15 to -5 to make it move upwards
                //lets change the Y speed to make it look like a flame
                self.speed = {x: -5 + Math.random() * 10, y: -15 + Math.random() * 10};
                //location = mouse coordinates
                //Now the flame follows the mouse coordinates
                if (mouse.x && mouse.y) {
                    self.location = {x: mouse.x, y: mouse.y};
                } else {
                    self.location = {x: W / 2, y: H-50};
                }
                //radius range = 10 to 30
                self.radius = 10 + Math.random() * 20;
                //life range = 20 to 30
                self.life = 20 + Math.random() * 10;
                self.remaining_life = self.life;
                //colors
                self.r = Math.floor(Math.random() * 256);
                self.g = Math.floor(Math.random() * 256);
                self.b = Math.floor(Math.random() * 256);

                return self;
            }


            function draw(len) {
                //Painting the canvas black
                //Time for lighting magic
                //particles are painted with "lighter"
                //In the next frame the background is painted normally without blending to the
                //previous frame
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, W, H);
                ctx.globalCompositeOperation = "lighter";

                for (var i = 0; i < len; i++) {
                    var p = particles[i];
                    ctx.beginPath();
                    //changing opacity according to the life.
                    //opacity goes to 0 at the end of life of a particle
                    p.opacity = Math.round(p.remaining_life / p.life * 100) / 100;
                    //a gradient instead of white fill
                    var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
                    gradient.addColorStop(0, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
                    gradient.addColorStop(0.5, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", " + p.opacity + ")");
                    gradient.addColorStop(1, "rgba(" + p.r + ", " + p.g + ", " + p.b + ", 0)");
                    ctx.fillStyle = gradient;
                    ctx.arc(p.location.x, p.location.y, p.radius, Math.PI * 2, false);
                    ctx.fill();
                    //
                    //lets move the particles
                    p.remaining_life--;
                    p.radius++;
                    p.location.x += p.speed.x;
                    p.location.y += p.speed.y;

                    //regenerate particles
                    if (p.remaining_life <= 0 || p.radius >= 50) {
                        //a brand new particle replacing the dead one
                        particles[i] = particle();
                    }
                }
            }

            return {
                init: init
            }
        })();
        Fire.init();
    }
});