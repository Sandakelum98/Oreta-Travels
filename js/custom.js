(function ($) {
    "use strict";
    $(document).ready(function () {

        $('.mobile-menu-toggle').on('click', function () {
            $('.student-sidebar').addClass('show-sidebar');
            $('body').toggleClass('menu-has-opened');
        });

        $('.schedule-tabs .schedule-tab').on('click', function () {
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
            navText: '',
            controls: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        //JS function for FAQ
        $(".package-day-item-header").on("click", function () {
            //if (!$(this).closest('li').hasClass("active")) {
            $('.package-day-item-body').slideUp(500);
            $(this).closest('.package-day-item').find('.package-day-item-body').slideToggle(500);
            $('.package-day-item').removeClass('active');
            $(this).closest('.package-day-item').addClass('active');

            //}

        });

        // read more
        // $('.read-more-btn').on('click', function () {
        //     $('.read-more-btn').hide();
        //     $('.read-more-para').slideDown(200);
        // });

        $('.td-row .td-title').on('click', function () {
            $(this).next('.td-desc').slideToggle();
        });


        // header slide menu
        $('.slide_menu_open').on('click', function () {
            $('.slide-menu-hide').animate({
                'right': '0px'
            });
        });
        $('.slide_menu_close').on('click', function () {
            $('.slide-menu-hide').animate({
                'right': '-540px'
            });
        });


    });
})(jQuery);