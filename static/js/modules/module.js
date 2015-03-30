define(['modules/xd.platform', 'modules/xd.model'], function(xdPlatform, xdModel) {
	var module = {
		
		init: function() {
			xdPlatform.init();
			xdModel.init();			
		}
	};
	return module;
});