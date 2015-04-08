'use strict';

(function() {
	require.config({
		paths: {
			angular: 'lib/angular'
		},
		shim: {
			'angular': {exports: 'angular'}
		}
	});

	require(['angular', 'modules/module', 'pages/pageRouter', 'func'], function(angular, module, page, func) {
		var app = {
			init: function() {
				window.XD = {
					modules: {},
                    angular: {}
				};
				this.initModules();
				this.initPages();

				this.initLayout();
			},
			initLayout: function() {
                window.XD.angular.app = angular.module('myApp', []);
                window.XD.angular.app.run();

				var c = func.$id("header_nav");
				c.addEventListener('click', function(e) {
	                var index = e.target.getAttribute('data-index');
	                if (index !== null) {
	                    this.setAttribute('index', index);
	                }
	            });

				func.sign("SIGNIN", "REGISTER");
				
				// localStorage
				func.setFormData();

				// signin
				func.ajaxSignin();
				// signout
				func.ajaxSignout();
				// register
				func.ajaxRegister();

			},
			initModules: function() {
				module.init();
			},
			initPages: function() {
				page.init();
			}
		};
		app.init();
	});
})();