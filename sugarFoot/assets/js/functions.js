$( document ).ready(function() {

  // Get started!
  smoothScroll(1000);
  workBelt();
  // Uses maxFontSize here and defaults to CSS one on fail.
  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '120px' });
  $("section .email").fitText(1, { minFontSize: '14px', maxFontSize: '100px' });
});

// SmoothScroll Function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

		var target = $( $(this).attr('href') );

		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});	
}

function workBelt() {
	$('.thumb-unit').click(function() {
		$('.work-belt').css('left', '-100%');
		$('.thumb-descriptions').show();
	});

	$('.arrowNav').click(function() {
		$('.work-belt').css('left', '0%');
		$('.thumb-descriptions').hide(800);
	});
}

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );