'use strict';

define([
    '../func',
    'modules/xd.platform',
    'modules/xd.ajax',
    'modules/xd.alert',
    'modules/xd.confirm',
    'modules/xd.indicator',
    'modules/xd.modal',
    'modules/xd.pjax'
], function (func,
             xdPlatform,
             xdAjax,
             xdAlert,
             xdConfirm,
             xdIndicator,
             xdModal,
             xdPjax
             ) {
    var module = {

        init: function () {
            xdAjax.init();
            xdPlatform.init();
            xdAlert.init();
            xdConfirm.init();
            xdIndicator.init();
            xdModal.init();
            xdPjax.init('#PJAX_CONTAINER', 'indicator', function (index) {
                if (index) {
                    console.log(index)
                    var c = func.$id("header_nav");
                    c.setAttribute('index', index);
                }
                document.title = func.$id('MAIN_APP').getAttribute('title') + '--darlin.me';
            });
        }
    };
    return module;
});