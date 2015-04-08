define([], function() {
    var func = {
        // normal
        $id: function(ele) {
            return document.getElementById(ele);
        },
        $q: function(ele) {
            return document.querySelector(ele);
        },
        $qa: function(ele) {
            return document.querySelectorAll(ele);
        },

        extend: function(old, add) {
            for (var i in old) {
                if (!(i in add)) {
                    add[i] = old[i];
                }
            }
        },

        getFormData: function(form) {
            var self = this;
            var result = {};
            var formDom = self.$q(form);
            var dataObj = formDom.querySelectorAll('[name]');
            var len = dataObj.length;
            for (var i = 0; i < len; i++) {
                var curr = dataObj[i];
                if (curr.getAttribute('type') === 'radio' || curr.getAttribute('type') === 'checkbox') {
                    if (!curr.checked) {
                        continue;
                    }
                }
                result[curr.name] = curr.value;
            }
            var stringResult = JSON.stringify(result);
            if (formDom.classList.contains('xd-form-store') && stringResult !== window.localStorage.getItem('XD.form-' + formDom.id)) {
                var r = confirm('允许浏览器记住用户名和密码？');
                if (r) {
                    window.localStorage.setItem('XD.form-' + formDom.id, stringResult);
                }
            }

            return result;
        },

        setFormData: function() {
            var self = this;

            var formDomAll = self.$qa('.xd-form-store');

            var len = formDomAll.length;
            for (var i = 0; i < len; i++) {
                var localData = window.localStorage.getItem('XD.form-' + formDomAll[i].id);
                if (localData !== null) {
                    localData = JSON.parse(localData);
                    var dataObj = formDomAll[i].querySelectorAll('[name]');
                    for (var j = 0; j < dataObj.length; j++) {
                        var curr = dataObj[j];
                        if (curr.getAttribute('type') === 'radio' || curr.getAttribute('type') === 'checkbox') {
                            // 暂时不写。。。
                        } else {
                            curr.value = localData[curr.name];
                        }
                    }
                }
            }
        },
        // end normal

        // the site

        sign: function(e1, e2) {
            var t1 = this.$id(e1),
                t2 = this.$id(e2);
            t1.addEventListener('click', function(e) {
                if (e.target.classList.contains('other-side')) {
                    this.classList.remove('active');
                    t2.classList.add('active');
                }
            });
            t2.addEventListener('click', function(e) {
                if (e.target.classList.contains('other-side')) {
                    this.classList.remove('active');
                    t1.classList.add('active');
                }
            });
        },

        getCookie: function(key) {
            var n = key.length;
            var cookieArr = document.cookie.split('; ');
            var result = {};
            cookieArr.forEach(function(self) {
                if (key === self.slice(0, n)) {
                    result[key] = self.slice(n + 1);
                    return;
                }
            });
            return result[key];

        },

        ajaxSignin: function() {
            var self = this;
            var signin = self.$id('SIGNIN');

            var localData = window.localStorage.getItem('XD.signin');
            if (localData !== null) {

            }

            signin.querySelector('.signin-button').addEventListener('click', function(e) {

                var url = signin.getAttribute('action');
                var data = self.getFormData('#SIGNIN');
                
                
                postData = JSON.stringify(data);

                window.XD.ajax({
                    method: 'POST',
                    url: url,
                    data: postData,
                    contentType: 'application/json;charset=UTF-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                    },
                    complete: function(response, status, xhr) {
                        console.log('===signin complete===');
                        var response = JSON.parse(response);
                        if (response.status === true) {
                            self.afterSignin(response.data.user);
                        } else {
                            window.XD.alert(response.data.error, {
                                title: '登录出错',
                                ok: '确认'
                            });
                        }
                    }
                });

                e.preventDefault();
            });
        },

        afterSignin: function(user) {
            var c = this.$id('USER');
            c.innerHTML = '<div class="header-side"><span>' + user + '</span><span class="signout a">退出</span></div>';
            window.XD.modules.Model.close();
        },

        ajaxSignout: function() {
            var self = this;
            var user = self.$id('USER');

            user.addEventListener('click', function(e) {
                var dom = e.target;
                if (dom.classList.contains('signout')) {
                    var url = this.getAttribute('ajax-out');

                    window.XD.ajax({
                        method: 'POST',
                        url: url,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                        },
                        complete: function(response, status, xhr) {
                            console.log('===signout complete===');
                            var response = JSON.parse(response);
                            if (response.status === true) {
                                self.afterSignout();
                            }
                        }
                    });
                }
            });
        },

        afterSignout: function() {
            var c = this.$id('USER');
            c.innerHTML = '<div class="a header-side" xd-model="#SIGN">登录</div>';
        },

        ajaxRegister: function() {
            var self = this;
            var register = self.$id('REGISTER');

            register.querySelector('.register-button').addEventListener('click', function(e) {

                var url = register.getAttribute('action');
                var data = self.getFormData('#REGISTER');
                postData = JSON.stringify(data);

                window.XD.ajax({
                    method: 'POST',
                    url: url,
                    data: postData,
                    contentType: 'application/json;charset=UTF-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                    },
                    complete: function(response, status, xhr) {
                        console.log('===register complete===');
                        var response = JSON.parse(response);
                        if (response.status === true) {
                            self.afterSignin(response.data.user);
                        }
                    }
                });

                e.preventDefault();
            });
        }

        // end site
    };
    return func;
});
