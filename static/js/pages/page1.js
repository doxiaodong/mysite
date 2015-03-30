// page1
define(['../func'], function(func) {
	var page1 = {
		init: function() {
			console.log("==this is page1==");
			window.XD.modules.Model.show("#id_model");
		}
	};
	return page1;
});