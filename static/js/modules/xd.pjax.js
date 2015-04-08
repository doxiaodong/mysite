// xd.pjax
define(['../func'], function(func) {
	var xdPjax = {
		init: function() {
            // first page state
            window.history.replaceState({url: window.location.href}, 'first', window.location.href);

			var container = func.$id('PJAX_CONTAINER');
			document.addEventListener('click', function(e) {
				var dom = e.target;
				if (dom.classList.contains('xd-pjax')) {
					var pjaxContainer = func.$q(dom.getAttribute('pjax-container')) || container;
					var href = dom.getAttribute('href');

					window.XD.modules.Ajax({
						url: href,
						contentType: 'text/html;charset=utf-8',
						beforeSend: function(xhr) {
							xhr.setRequestHeader('XD-PJAX', 'true');
						},
						complete: function(response, status, xhr) {
							pjaxContainer.innerHTML = response;
                            //window.localStorage.setItem('XD.page-' + href, response);
                            window.history.pushState({
                                url: href,
                                time: new Date().getTime()
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
                        // user container now
                        container.innerHTML = response;
                    }
                });
                console.log(e);
            });

		}
	};
	return xdPjax;
});