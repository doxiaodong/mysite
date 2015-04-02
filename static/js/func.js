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
            return result;
        },

        ajax: function(options) {
            var self = this;
            var defaults = {
                method: 'GET',
                data: '',
                url: '',
                async: true,
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded',
                beforeSend: function() {},
                complete: function() {}
            };
            // Merge options and defaults
            self.extend(defaults, options);

            var _method = options.method.toUpperCase();

            // Create XHR
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    options.complete(xhr.responseText, xhr.status, xhr);
                }
            }

            xhr.open(_method, options.url, options.async);
            if (options.beforeSend) {
                options.beforeSend(xhr);
            }
            if (options.data) {
                xhr.setRequestHeader('Content-Type', options.contentType);
            }
            xhr.send(options.data);
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

            signin.querySelector('.signin-button').addEventListener('click', function(e) {

                var url = signin.getAttribute('action');
                console.log(url);
                var data = self.getFormData('#SIGNIN');
                data = JSON.stringify(data);


                self.ajax({
                    method: 'POST',
                    url: url,
                    data: data,
                    contentType: 'application/json;charset=UTF-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                    },
                    complete: function(responseText, status, xhr) {
                        console.log('===signin complete===');
                        if (responseText === 'true') {
                            window.location.reload();
                        }
                    }
                });

                e.preventDefault();
            });
        },

        ajaxSignout: function() {
            var self = this;
            var signout = self.$q('.signout');

            if (signout !== null) {
                signout.addEventListener('click', function(e) {

                    var url = this.getAttribute('ajax-out');

                    self.ajax({
                        method: 'POST',
                        url: url,
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                        },
                        complete: function(responseText, status, xhr) {
                            console.log('===signout complete===');
                            if (responseText === 'true') {
                                window.location.reload();
                            }
                        }
                    });
                });
            }
        },

        ajaxRegister: function() {
            var self = this;
            var register = self.$id('REGISTER');

            register.querySelector('.register-button').addEventListener('click', function(e) {

                var url = register.getAttribute('action');
                var data = self.getFormData('#REGISTER');
                data = JSON.stringify(data);

                self.ajax({
                    method: 'POST',
                    url: url,
                    data: data,
                    contentType: 'application/json;charset=UTF-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('X-CSRFToken', self.getCookie('csrftoken'));
                    },
                    complete: function(responseText, status, xhr) {
                        console.log('===register complete===');
                        if (responseText === 'true') {
                            window.location.reload();
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
