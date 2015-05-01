'use strict';

// account_setting
define(['../../func'], function (func) {
    var account_setting = {
        init: function () {
            this.changePic();
            if (FormData) {
                this.saveSetting();
            }
        },
        changePic: function () {
            var picInput = func.$id("setting_pic");
            var changeImg = func.$id("change_pic");
            if (picInput) {
                picInput.addEventListener('change', function () {
                    var pic = this.files[0];
                    var src = window.URL.createObjectURL(pic);
                    // 预览
                    changeImg.setAttribute('src', src);
                });
            }
        },
        saveSetting: function () {
            var saveForm = func.$id("ACCOUNT_SETTING");
            if (!saveForm) {
                return;
            }
            var form = document.forms.namedItem("SETTING");
            saveForm.addEventListener('submit', function (e) {
                var formData = new FormData(form);
                var url = saveForm.getAttribute('action');

                var xhr = new XMLHttpRequest();
                xhr.open("POST", url, true);
                xhr.onreadystatechange = function () {
                    var response = xhr.response;
                    if (xhr.readyState == 4) {
                        console.log("complete");
                    }
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        console.log("success");
                        var response = JSON.parse(response);
                        if (response.status === true) {
                            window.XD.alert("修改成功", {
                                title: '提示',
                                ok: '确认'
                            });
                            func.$id('USER').innerHTML = '<div class="header-side"><span>' + response.data.user + '</span><span class="signout a">退出</span></div>';
                        } else {
                            window.XD.alert(response.data.error, {
                                title: '出错啦',
                                ok: '确认'
                            });
                        }
                    }
                    if (xhr.readyState == 4) {
                        if (xhr.status >= 400) {
                            console.log("error");
                        }
                    }
                };
                xhr.send(formData);

                e.preventDefault();
            });
        }
    };
    return account_setting;
});