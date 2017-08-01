$(function() {


	"use strict";

	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, _isresponsive, xsPoint = 767, smPoint = 991, mdPoint = 1199;


	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	function pageCalculations(){
		winW = $(window).width();
		winH = $(window).height();
		if($('.open-icon').is(':visible')) _isresponsive = true;
		else _isresponsive = false;
        $('.block').css({'padding-bottom':$('footer').height()});
	}


	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	$('.simple-input input, .simple-input textarea').each(function(){
		if($(this).val()!=="") $(this).parent().addClass('active');
	});
	pageCalculations();


	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).load(function(){
		$('#loader-wrapper').fadeOut(1500);
	});


	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	function resizeCall(){
		pageCalculations();
	}
	$(window).resize(function(){
		resizeCall();
	});
	window.addEventListener("orientationchange", function() {
		resizeCall();
	}, false);

    
    /*===================*/
	/* 06 - CLOCK PLUGIN */
	/*===================*/
    var clock;

    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
            stop: function() {
                $('.popup-in div').hide();
                $('.popup-clock').show();
                $('.popup').addClass('active');
                setTimeout(function(){
                    $('.popup').removeClass('active');
                },2500);
            }
        }
    });

    var date = new Date("14 Sep 2017");
    var now = new Date();
    var diff = (date.getTime()/1000) - (now.getTime()/1000);  

    clock.setTime(diff);
    clock.setCountdown(true);
    clock.start();
    
    

	
	$(document).on('focus', '.error-class', function(){
		$(this).removeClass('error-class');
	});

	$('.full-screen-popup .close-button, .full-screen-popup .close-layer').on('click', function(){
		$('.full-screen-popup').removeClass('active');	
	});

    /*=====================*/
	/* 09 - CLICKS, HOVERS */
	/*=====================*/

	//material design fields
    $('.simple-input input, .simple-input textarea').on('focus', function(){
		$(this).parent().addClass('active');
	});

	$('.simple-input input, .simple-input textarea').on('blur', function(){
		if($(this).val()==="") $(this).parent().removeClass('active');
	});

	//open-close responsive menu
	$('.menu-button').on('click', function(){
		$('header').toggleClass('active');
	});

});