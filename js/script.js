$(function ($) {
    "use strict";

    //preloader

    $(window).on('load', function () {

        $('.preloader').fadeOut(1000);

    });

    //backtotop button

    var backtop = $(".backtotop");

    var topmenu = $(".custom_nav").offset().top;

    $(window).on('scroll', function () {

        var scroLL = $(window).scrollTop();

        //menu js
        if (scroLL > 150) {
            $(".custom_nav").addClass('menu');
        } else {
            $(".custom_nav").removeClass('menu');
        }

        //back to top btn
        if (scroLL > 200) {
            backtop.fadeIn(100);
        } else {
            backtop.fadeOut(100);
        }


    });
    var htmlBody = $('html,body');
    //back to top btn
    backtop.on('click', function () {

        htmlBody.animate({
            scrollTop: 0
        }, 1000)

    });

    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });


    //filterize js
    $(window).on('load', function () {
        var filterizd = $('.filtr-container').filterizr();
    });


    var port_menu = $('.port_menu li');
    port_menu.on('click', function () {
        port_menu.removeClass('port_active');
        $(this).addClass('port_active');
    });

    //progress bar js

    var waypoints = $('.bar').waypoint(function (direction) {
        $(".bar").each(function () {

            $('#bar1').barfiller({
                tooltip: true,
                duration: 1000,
                animateOnResize: true,
                symbol: "%"

            });
            $('#bar2').barfiller({
                tooltip: true,
                duration: 1000,
                animateOnResize: true,
                symbol: "%"

            });

            $('#bar3').barfiller({
                tooltip: true,
                duration: 1000,
                animateOnResize: true,
                symbol: "%"

            });

            $('#bar4').barfiller({
                tooltip: true,
                duration: 1000,
                animateOnResize: true,
                symbol: "%"

            });

        });
    }, {
        offset: '80%'
    });

    //counter part js
    $(".counter").counterUp({
        delay: 3,
        time: 1000,
    });

    //banner slider js
    $('.banner_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        nextArrow: '<i class="fas fa-angle-right next_arrow"></i>',
        prevArrow: '<i class="fas fa-angle-left prev_arrow"></i>',
    });

    //testimonial slider js

    $('.test_slider').slick({

        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: true,
    });


    $('.edu_slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        vertical: true,
        centerMode: true,
        verticalSwiping: true,
        centerMode: true,
        mobileFirst: true,
        touchMove: false,
        swipe: false,
        centerPadding: '0px',
        nextArrow: '<i class="fas fa-angle-down arrow_up"></i>',
        prevArrow: '<i class="fas fa-angle-up arrow_dwn"></i>',
    });

    //type js

    var typed = new Typed(".type", {
        strings: ["Sahil Kumar","Creative Web Developer.", "20 years Young"],
        loop: true,
        backDelay: 1000,
        typeSpeed: 70,
        smartBackspace: true,
    });

    if ($.fn.mb_YTPlayer) {
        $(".player").mb_YTPlayer();
    }
    if ($.fn.ripples) {
        $('.banner_part_two').ripples({
            imageUrl: null,
            resolution: 256,
            dropRadius: 10,
            perturbance: 0.02,
            interactive: true,
            crossOrigin: '',
        });
    }

});
