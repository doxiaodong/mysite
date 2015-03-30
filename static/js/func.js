define([], function() {
	var func = {
		$id: function(ele) {
			return document.getElementById(ele);
		},
		$q: function(ele) {
			return document.querySelector(ele);
		},
		$qa: function(ele) {
			return document.querySelectorAll(ele);
		},

		sign: function(e1, e2) {
			var t1 = this.$id(e1),
				t2 = this.$id(e2);
			t1.addEventListener('click', function() {
				this.classList.remove('active');
				t2.classList.add('active');
			});
			t2.addEventListener('click', function() {
				this.classList.remove('active');
				t1.classList.add('active');
			});
		}
	};
	return func;
});