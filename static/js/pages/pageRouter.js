define(['pages/page1', 'pages/page2'], function(page1, page2) {
	var page = {
		
		init: function() {
			var pathname = window.location.pathname;
			if (pathname === '/article/detail') {
				page1.init();
			}
			if (pathname === '/') {
				page2.init();
			}
		}
	};
	return page;
});