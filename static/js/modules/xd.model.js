// xd.model
define(['../func'], function(func) {
	var xdModel = {
		init: function() {
			this.define();

			document.addEventListener('click', function(e) {
	            var tar = e.target.getAttribute('xd-model');
	            if(tar !== null) {
	     			window.XD.modules.Model.show(tar);
	     		}
	        });
            document.addEventListener('click', function(e) {
            	
                if (e.target.classList.contains('xd-close')) {
                    window.XD.modules.Model.close();
                }
            });
		},
		define: function() {
			var t;
			window.XD.modules.Model = {
			    show: function(tar) {
			    	var self = this;
		    		if (func.$q('.xd-model.shown') !== null ) {
			    		self.close();
			    	}

		    		var ele = func.$q(tar);
			        ele.classList.add('showing');
			        ele.classList.add('shown');
			        t = setTimeout(function() {
			            ele.classList.remove('showing');
			        }, 200);
			    },
			    close: function() {
			    	if (t !== undefined) {
			    		clearTimeout(t);
			    	}
			    	var clsList = func.$q('.xd-model.shown').classList;
			    	if(clsList.contains('showing')) {
			    		clsList.remove('showing');
			    	}
			    	clsList.remove('shown');
			    }
			};
		}
	};
	return xdModel;
});