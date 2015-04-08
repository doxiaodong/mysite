'use strict';

// xd.pjax
define(['../func'], function(func) {
	var xdPjax = {
		init: function(ele) {
            // first page state
            window.history.replaceState({
                url: window.location.href,
                time: new Date().getTime(),
                container: ele
            }, 'first', window.location.href);

			//var container = func.$q(ele);
			document.addEventListener('click', function(e) {
				var dom = e.target;
				if (dom.classList.contains('xd-pjax')) {
					var pjaxContainerString = dom.getAttribute('pjax-container') || ele;
					var href = dom.getAttribute('href');

					window.XD.modules.Ajax({
						url: href,
						contentType: 'text/html;charset=utf-8',
						beforeSend: function(xhr) {
							xhr.setRequestHeader('XD-PJAX', 'true');
						},
						complete: function(response, status, xhr) {
							func.$q(pjaxContainerString).innerHTML = response;
                            //window.localStorage.setItem('XD.page-' + href, response);
                            window.history.pushState({
                                url: href,
                                time: new Date().getTime(),
                                container: pjaxContainerString
                            }, '', href);
						}
					});

					e.preventDefault();
				}
			});
            window.addEventListener('popstate', function(e) {
                var state = e.state;
                if (state === null) {
                    return;
                }
                if (e.title === 'first') {
                    console.log("first");
                    window.location.reload();
                    return;
                }
                window.XD.modules.Ajax({
                    url: state.url,
                    contentType: 'text/html;charset=utf-8',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('XD-PJAX', 'true');
                    },
                    complete: function(response, status, xhr) {
                        func.$q(state.container).innerHTML = response;
                    }
                });
            });

		}
	};
	return xdPjax;
});