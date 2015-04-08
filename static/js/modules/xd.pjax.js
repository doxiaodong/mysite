// xd.pjax
define(['../func'], function(func) {
	var xdPjax = {
		init: function() {
			var container = func.$id('PJAX_CONTAINER');
			document.addEventListener('click', function(e) {
				var dom = e.target;
				if (dom.classList.contains('xd-pjax')) {
					var pjaxContainer = dom.getAttribute('pjax-container') || container;
					var href = dom.getAttribute('href');
					window.XD.modules.Ajax({
						url: href,
						contentType: 'text/html;charset=utf-8',
						beforeSend: function(xhr) {
							xhr.setRequestHeader('XD-PJAX', 'true');
						},
						complete: function(response, status, xhr) {
							console.log(response);
							pjaxContainer.innerHTML = response;
						}
					});

					e.preventDefault();
				}
			});

		}
	};
	return xdPjax;
});