'use strict';

// xd.modal
define(['../func'], function (func) {
    var xdModal = {
        init: function () {
            this.define();

            document.addEventListener('click', function (e) {
                var tar = e.target.getAttribute('xd-modal');
                if (tar !== null) {
                    window.XD.modules.Modal.show(tar);
                }
            });
            document.addEventListener('click', function (e) {

                if (e.target.classList.contains('xd-modal-close')) {
                    window.XD.modules.Modal.close();
                }
            });
        },
        define: function () {
            var t;
            window.XD.modules.Modal = {
                show: function (tar) {
                    var self = this;
                    if (func.$q('.xd-modal.shown') !== null) {
                        self.close();
                    }

                    var ele = func.$q(tar);
                    ele.classList.add('showing');
                    ele.classList.add('shown');
                    t = setTimeout(function () {
                        ele.classList.remove('showing');
                    }, 200);
                },
                close: function () {
                    if (t !== undefined) {
                        clearTimeout(t);
                    }
                    var clsList = func.$q('.xd-modal.shown').classList;
                    if (clsList.contains('showing')) {
                        clsList.remove('showing');
                    }
                    clsList.remove('shown');
                }
            };
        }
    };
    return xdModal;
});