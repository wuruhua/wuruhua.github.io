// Ktportfolio Theme JavaScript

(function($) {
    "use strict"; // Start of use strict
//    $.fn.extend({
//    animateCss: function (animationName) {
//        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
//            $(this).removeClass('animated ' + animationName);
//        });
//    }
//    });



    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
//        $('.portfolio-item').animateCss('fadeInUp');
    });
//    $('.portfolio-item').animateCss('fadeInUp');
//    $('.timeline-image').animateCss('bounceInDown');

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('a.portfolio-link').bind('click', function(event) {
//        var $anchor = $(this);
        var project = $(this).attr('href');
        project = project.replace("#", "");
        ga('send', {
            hitType: 'event',
            eventCategory: 'Portfolio',
            eventAction: 'click',
            eventLabel: project
        });
    });

    $('.resume-btn').bind('click', function(event) {
        ga('send', {
            hitType: 'event',
            eventCategory: 'View_PDF_Resume',
            eventAction: 'click',
            eventLabel: $(this).attr('href'),
            transport: 'beacon'
        });
    });



//    new WOW().init();
    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    $('.phone-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    });

    $('.watch-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    });
    $('.sample-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
//  fade:true
    });
})(jQuery); // End of use strict
