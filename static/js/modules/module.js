'use strict';

define([
    'modules/xd.ajax',
    'modules/xd.alert',
    'modules/xd.confirm',
    'modules/xd.modal',
    'modules/xd.pjax',
    'modules/xd.platform'
], function(
    xdAjax,
    xdAlert,
    xdConfirm,
    xdModal,
    xdPjax,
    xdPlatform
) {
	var module = {

		init: function() {
			xdAjax.init();
			xdAlert.init();
			xdConfirm.init();
			xdModal.init();
			xdPjax.init('#PJAX_CONTAINER', function(page) {
                page.init();
            });
			xdPlatform.init();
		}
	};
	return module;
});