'use strict';

define([
    'modules/xd.ajax',
    'modules/xd.alert',
    'modules/xd.confirm',
    'modules/xd.model',
    'modules/xd.pjax',
    'modules/xd.platform'
], function(
    xdAjax,
    xdAlert,
    xdConfirm,
    xdModel,
    xdPjax,
    xdPlatform
) {
	var module = {

		init: function() {
			xdAjax.init();
			xdAlert.init();
			xdConfirm.init();
			xdModel.init();
			xdPjax.init('#PJAX_CONTAINER', function(page) {
                page.init();
            });
			xdPlatform.init();
		}
	};
	return module;
});