'use strict';

// xd.confirm
define(['../func'], function(func) {
	var xdConfirm = {
		init: function() {
			window.XD.modules.Confirm = function(content, opts, callbackOk, callbackCancel) {
				var content = content || '', title = '', ok = 'OK', cancel = 'Cancel';
				if (typeof opts === 'function') {
	                callbackCancel = arguments[2];
	                callbackOk = arguments[1];
	                opts = undefined;
	            }
				if (opts !== undefined) {
					title = opts.title || title;
					ok = opts.ok || ok;
					cancel = opts.cancel || cancel;
				}
				var htmlTemplate = '<div class="xd-confirm shown">' + 
										'<div class="xd-container">' + 
											'<header class="xd-header">' + title + '</header>' +
											'<article class="xd-article">' + content + '</article>' +
											'<footer class="xd-footer">' + 
												'<button class="btn xd-confirm-ok-button">' + ok + '</button>' + 
												'<button class="btn btn-side xd-confirm-cancel-button">' + cancel + '</button>' + 
											'</footer>' +
											'<i class="xd-confirm-close icon ion-ios-close-empty"></i>' +
										'</div>' + 
									'</div>';
				var container = document.createElement('div');
				container.classList.add('xd-confirm-container');
				container.innerHTML = htmlTemplate;
				func.$q('body').appendChild(container);

				container.addEventListener('click', function(e) {
					var domClassList = e.target.classList;
					if (domClassList.contains('xd-confirm-ok-button')) {
	                    func.$q('body').removeChild(container);
	                    callbackOk();
	                }
	                if (domClassList.contains('xd-confirm-close') || e.target.classList.contains('xd-confirm-cancel-button')) {
	                    func.$q('body').removeChild(container);
	                    callbackCancel();
	                }
		        });

			};
			window.XD.confirm = window.XD.modules.Confirm;
		}
	};
	return xdConfirm;
});