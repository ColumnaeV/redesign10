// Loading //
document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
        document.getElementById('body-container').style.opacity="0";
        setTimeout(function(){
            document.getElementById('interactive');
            $('div.load').removeClass('loading-active');
            document.getElementById('body-container').style.opacity="1";
        },6000);
    } else if (state == 'complete') {
        setTimeout(function(){
            document.getElementById('interactive');
            $('div.load').removeClass('loading-active');
            document.getElementById('body-container').style.opacity="1";
        },1200);
    }
}

$(document).ready(function (){
    // Default Async Warning Fix //
    // $.ajaxPrefilter(function( options, original_Options, jqXHR ) {
    //     options.async = true;
    // });

    // Other //
    var width = $(window).width();
    var vh100 = ($(window).outerHeight() / width*100 + "vw");
    var vhBanner = ($(window).outerHeight() / width*65 + "vw");
    $('.carousel').css({ "height": vh100 });
    $('div.page-wrapper div.page div.height-req, div.page-wrapper div.page div.height-req div.module-style').css({ "min-height": vh100 });

    // Rescale Width //
    $(window).on('resize', function() {
        if ($(this).width() != width) {
            width = $(this).width();
            var svh100 = ($(window).outerHeight() / width*100 + "vw");
            var svhBanner = ($(window).outerHeight() / width*65 + "vw");
            $('div.carousel').css({ "height": svh100 });
            $('div.page-wrapper div.page div.height-req, div.page-wrapper div.page div.height-req div.module-style').css({ "min-height": svh100 });
        };
    });

    // Carousel //
    $('.carousel').bxSlider({
        auto: true,
        mode: 'fade',
        speed: 1500,
        pause: 5000,
        startSlide: 0,
        infiniteLoop: true,
        easing: 'easeInOutExpo',
        slideSelector: 'div.slide',
        controls: false,
        pager: false,
        touchEnabled: false,
        preventDefaultSwipeX: true,
        preventDefaultSwipeY: true,
    });

    // Toggle the nav //
    $('.nav-img').stop(true, false).click(function (){
        $('.hamburger').toggleClass('is-active');
        $('div.nav-wrapper').toggleClass('nav-is-active');
        $('#body-container').toggleClass('page-wrapper-toggled');
    });

    //Tab Scroll CSS Control//
    $(window).scroll(function(){
        if($(window).scrollTop() < $("#about-page").offset().top - 50 ){
            document.title = 'Tiles by ColumnaeV';
        }
        if($(window).scrollTop() >= $("#about-page").offset().top - 50  && $(window).scrollTop() < $("#projects-page").offset().top - 150 ){
            document.title = 'Tiles by ColumnaeV | About';
        }
        if($(window).scrollTop() >= $("#projects-page").offset().top - 50  && $(window).scrollTop() < $("#artwork-page").offset().top - 150 ){
            document.title = 'Tiles by ColumnaeV | Projects';
        }
        if($(window).scrollTop() >= $("#artwork-page").offset().top - 50  && $(window).scrollTop() < $("#contact-page").offset().top - 150 ){
            document.title = 'Tiles by ColumnaeV | Artwork';
        }
        if($(window).scrollTop() >= $("#contact-page").offset().top - 150 ){
            document.title = 'Tiles by ColumnaeV | Contact';
        }
    });

    function dynamicStyle() {
        // Lazy //
        $(function() {
            $('.lazy').lazy();
        });

        // Modules need to be styled from page-wrapper! //
        // Module Style Colour Control //
        $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').addClass('mod-sty-dim').append("<div class='des-top'></div><div class='des-bottom'></div>");

        // Mobile Control Desktop Only //
        var VPComp = $(window).width()/$(window).height();
        if (VPComp > 40/31) {
            // Card Split //
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').addClass('card-left');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cont').addClass('card-right');

            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').addClass('card-right');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cont').addClass('card-left');
        
            // Card Tag //
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').children('div.card-cov-tint').children('div.tag-anchor').addClass('card-tag');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').children('div.card-cov-tint').children('div.tag-anchor').addClass('card-tag-alt');

            // Card Split //
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.even-split-ov-wrapper').children('div.even-graphic-wrap').addClass('even-left');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.even-split-ov-wrapper').children('div.even-text-wrap').addClass('even-right');

            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.even-split-ov-wrapper').children('div.even-graphic-wrap').addClass('even-right');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.even-split-ov-wrapper').children('div.even-text-wrap').addClass('even-left');
        }
        else {
            console.log('mobile mode');
            $('div.nav-wrapper').removeClass('nav-desktop');

            // Card Tag //
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:even').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').children('div.card-cov-tint').children('div.tag-anchor').addClass('card-tag');
            $('div.page-wrapper').children('div.page').children('div.module-wrapper:odd').children('div.module-style').children('div.mod-cont-wrapper').children('div.card-split-ov-wrapper').children('div.card-split-wrapper').children('div.card-cover').children('div.card-cov-tint').children('div.tag-anchor').addClass('card-tag-alt');
        }

        // Card Hover //
        $('div.card-target').mouseover(function (event){
            $(event.target).closest("div.card-cover").addClass("card-cov-hover");
        });
        $('div.card-target').mouseout(function (event){
            $(event.target).closest("div.card-cover").removeClass("card-cov-hover");
        });

        // Artwork Tagging //
        $('img.artwork').mouseover(function (event){
            $(event.target).closest("div.centre-content").children('div.art-tag').addClass("art-tag-toggle");
        });
        $('img.artwork').mouseout(function (event){
            $(event.target).closest("div.centre-content").children('div.art-tag').removeClass("art-tag-toggle");
        });

        // Copyright Year //
        var yearC = new Date().getFullYear();
        $("span.yearCopy").empty();
        $("span.yearCopy").append(yearC);
    }

    // Load Home First //
    // $.ajax({
    //     url: "index-page-data.html",
    //     context: document.body,
    //     success: function(response){
    //         $('div.page-wrapper').html(response);
    //         dynamicStyle();
    //     }      
    // });

    // First load of dynamic //
    dynamicStyle();

    // Nav Corrections //
    // $('.nav-tab').on('click', function() {
        
    // });

    // Nav Background Colourisation //
    // $(window).scroll(function() {
    //     if($(window).scrollTop() < $('div.carousel').height() - $('div.nav-desktop').height()){
    //         $('div.nav-desktop').removeClass('nav-desk-moved');
    //         $('div.nav-desktop div.nav-right span.nav-tab').removeClass('nav-tab-desk-moved');
    //         $('div.nav-desktop div.nav-left img.nav-img').removeClass('nav-img-desk-moved');
    //         $('img.nav-img').attr("src", "assets/img/logo-light.png");
    //     }else{
    //         $('div.nav-desktop').addClass('nav-desk-moved');
    //         $('div.nav-desktop div.nav-right span.nav-tab').addClass('nav-tab-desk-moved');
    //         $('div.nav-desktop div.nav-left img.nav-img').addClass('nav-img-desk-moved');
    //         $('img.nav-img').attr("src", "assets/img/logo-dark.png");
    //     }
    // });

    // Page Load Initiation from slide-button //
    $('div.slide-button').on('click', function() {
        var currPageID = $(this).attr('id').replace("-slide-button","");
        document.title = 'Tiles by ColumnaeV | ' + currPageID.substr(0,1).toUpperCase() + currPageID.substr(1);

        // Select Page //
        var setPageID = "#" + currPageID + "-page";

        // Nav to Page //
        $('html, body').stop(true, false).animate({
            scrollTop: $(setPageID).offset().top
        }, 1000, 'easeInOutExpo');
    });

    // Card Active (anchor is div.card-act-target and card-has-been-toggled) //
    $("div.page-wrapper").on("click", "div.page div.module-wrapper div.module-style div.mod-cont-wrapper div.card-split-ov-wrapper div.card-split-wrapper div.card-cover div.card-act-target", function(){
        $(this).addClass("card-has-been-toggled");
        $(this).closest("div.card-split-wrapper").addClass("card-split-wrapper-toggle");
        $(this).closest("div.card-cover").addClass("card-cov-neg-hover").addClass("card-cov-toggle");
        $(this).closest("div.card-split-wrapper").children("div.card-cont").addClass("card-cont-toggle");
        $(this).closest("div.card-split-wrapper").children("div.card-cont").children("div.card-cont-hid").addClass("card-cont-hid-toggle");
        $(this).closest("div.card-split-wrapper").addClass("card-split-wrapper-toggle");

        $('html, body').stop(true, false).animate({
            scrollTop: $(this).closest('div.module-wrapper').offset().top
        }, 800, 'easeInOutExpo');
    });

    $("div.page-wrapper").on("click", "div.page div.module-wrapper div.module-style div.mod-cont-wrapper div.card-split-ov-wrapper div.card-split-wrapper div.card-cover div.card-has-been-toggled", function(){
        $(this).removeClass("card-has-been-toggled");
        $(this).closest("div.card-split-wrapper").removeClass("card-split-wrapper-toggle");
        $(this).closest("div.card-cover").removeClass("card-cov-neg-hover").removeClass("card-cov-toggle");
        $(this).closest("div.card-split-wrapper").children("div.card-cont").removeClass("card-cont-toggle");
        $(this).closest("div.card-split-wrapper").children("div.card-cont").children("div.card-cont-hid").removeClass("card-cont-hid-toggle");
        $(this).closest("div.card-split-wrapper").removeClass("card-split-wrapper-toggle");

        $('html, body').stop(true, false).animate({
            scrollTop: $(this).closest('div.module-wrapper').offset().top
        }, 800, 'easeInOutExpo');
    });
});