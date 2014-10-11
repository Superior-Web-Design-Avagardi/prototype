


(function(window, document, undefined) {
	
	'use strict';
	
	var fx = {
		aboutUs : function(e) {
			$('html, body').animate({
				scrollTop: $("#about-us").offset().top
			}, 500);
		}
	};

	function addListners() {
		$('[data-action="aboutUs"]').click(fx.aboutUs);
	}
	
	function slideShow() {
		var opts = {
			mode : 'fade'
		};
		
		$('.slider').bxSlider(opts);
	}
	
	function init() {
		addListners();
		slideShow();
	}
	
	$(document).ready(function() {
		init();
	});
})(window, document);