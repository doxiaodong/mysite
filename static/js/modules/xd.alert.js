'use strict';

// xd.alert
define(['../func'], function(func) {
	var xdAlert = {
		init: function() {

			window.XD.modules.Alert = function(content, opts, callbackOk) {
				var content = content || '', title = '', ok = 'OK';
				if (typeof opts === 'function') {
	                callbackOk = arguments[1];
	                opts = undefined;
	            }
				if (opts !== undefined) {
					title = opts.title || title;
					ok = opts.ok || ok;
				}
				var htmlTemplate = '<div class="xd-alert shown">' + 
										'<div class="xd-container">' + 
											'<header class="xd-header">' + title + '</header>' +
											'<article class="xd-article">' + content + '</article>' +
											'<footer class="xd-footer">' + 
												'<button class="btn xd-alert-close-button">' + ok + '</button>' + 
											'</footer>' +
											'<i class="xd-alert-close icon ion-ios-close-empty"></i>' +
										'</div>' + 
									'</div>';
				var container = document.createElement('div');
				container.classList.add('xd-alert-container');
				container.innerHTML = htmlTemplate;
				func.$q('body').appendChild(container);

				container.addEventListener('click', function(e) {
	                if (e.target.classList.contains('xd-alert-close') || e.target.classList.contains('xd-alert-close-button')) {
	                    func.$q('body').removeChild(container);
	                    callbackOk();
	                }
		        });
			};

			window.XD.alert = window.XD.modules.Alert;
			
		}
	};
	return xdAlert;
});