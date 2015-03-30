// xd.model
define(['../func'], function(func) {
	var xdModel = {
		init: function() {
			this.define();

			document.addEventListener('click', function(e) {
	            var tar = e.target.getAttribute('xd-model');
	            window.XD.modules.Model.show(tar);
	        });
	        if (func.$q('.xd-model') !== null) {
	            func.$q('.xd-model').addEventListener('click', function(e) {
	                if (e.target.classList.contains('xd-close')) {
	                    window.XD.modules.Model.close();
	                }
	            });
	        }
		},
		define: function() {
			window.XD.modules.Model= {
			    show: function(tar) {
			    	if(tar !== null) {
			    		var ele = func.$q(tar);
				        ele.classList.add('showing');
				        setTimeout(function() {
				            ele.classList.add('shown');
				            ele.classList.remove('showing');
				        }, 200);
			    	}
			    },
			    close: function() {
			    	func.$q('.xd-model.shown').classList.remove('shown');
			    }
			};
		}
	};
	return xdModel;
});