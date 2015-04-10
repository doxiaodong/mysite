'use strict';

define([
    'pages/page1',
    'pages/home/home',
    'pages/article/detail'
], function(
    page1,
    page_home,
    page_article_detail
) {
	var page = {
		
		init: function() {
			var pathname = window.location.pathname;
			if (pathname.match(/^\/article\/detail/)) {
				page_article_detail.init();
			}
			if (pathname === '/') {
				page_home.init();
			}
		}
	};
	return page;
});