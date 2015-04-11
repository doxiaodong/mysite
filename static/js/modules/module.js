'use strict';

define([
    'modules/xd.ajax',
    'modules/xd.alert',
    'modules/xd.confirm',
    'modules/xd.indicator',
    'modules/xd.modal',
    'modules/xd.pjax',
    'modules/xd.platform'
], function (xdAjax,
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
            xdPjax.init('#PJAX_CONTAINER', 'indicator', function (page) {
                page.init();
            });
            xdPlatform.init();
        }
    };
    return module;
});