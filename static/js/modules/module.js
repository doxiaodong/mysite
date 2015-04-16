'use strict';

define([
    '../func',
    'modules/xd.ajax',
    'modules/xd.alert',
    'modules/xd.confirm',
    'modules/xd.indicator',
    'modules/xd.modal',
    'modules/xd.pjax',
    'modules/xd.platform'
], function (func,
             xdAjax,
             xdAlert,
             xdConfirm,
             xdIndicator,
             xdModal,
             xdPjax,
             xdPlatform) {
    var module = {

        init: function () {
            xdAjax.init();
            xdAlert.init();
            xdConfirm.init();
            xdIndicator.init();
            xdModal.init();
            xdPjax.init('#PJAX_CONTAINER', 'indicator', function (page, index) {
                if (index) {
                    var c = func.$id("header_nav");
                    c.setAttribute('index', index);
                }
                document.title = func.$id('MAIN_APP').getAttribute('title') + '--darlin.me';
                page.init();
            });
            xdPlatform.init();
        }
    };
    return module;
});