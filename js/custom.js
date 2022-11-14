(function($) {
  "use strict";
  $(document).ready(function(){ 
$('.mobile-menu-toggle').on('click', function(){
 $('.student-sidebar').addClass('show-sidebar');
 $('body').toggleClass('menu-has-opened');
});
$('.schedule-tabs .schedule-tab').on('click', function(){
	$('.time-table').hide();
	var dataId = $(this).data('id');
	$('#' + dataId).slideDown();
$('.schedule-tabs .schedule-tab').removeClass('active');
	$(this).addClass('active');
});
$('.testimonial-slider').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			autoplay: true,
			autoplayHoverPause: true,
	navText:'',
			controls: true,
			responsive: {
				0: {
					items: 1
				}
			}
		});
  });
  })(jQuery);