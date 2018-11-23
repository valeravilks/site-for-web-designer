import '../less/style.less';
import $ from 'jquery'
import 'jquery-cropper';


$(document).ready(function(){
    // active menu item
    let actionMenu = $('.active_page');
    actionMenu.children().children().show();

    // menu circle item hover show/hide
    $('.header .menu a').hover(function (e) {
        let eventObject = $(e.target);
        if (!eventObject.parent().hasClass('active_page')) {
            eventObject.children().toggle();
        }
    });

    // function show circle menu img
    function circleImg(){
        if($(window).width() > 1244) {
            $('.menu img').css('opacity', '1');
        } else {
            $('.menu img').css('opacity', '0');
        }
    }

    // Show circle resize window
    circleImg();
    $(window).resize(function(){
        circleImg();
    });

    rotate('.img3_1', 8000, 600);
    rotate('.img7_1', 8000, 400);
    rotate('.img8_1', 8000, 200);
    rotate('.img9_1', 8000, 0);
    rotate('.img10_1', 8000, 500);
    rotate('.img11_1', 8000, 300);
    rotate('.img13_1', 8000, 700);
    rotate('.img14_1', 8000, 100);

    // function rotate element
    function rotate(selector, interval, delay){
        let array_img = $(selector).children().children();
        console.log(array_img);

        array_img.not(':eq(0)').css('transform', 'rotateY(90deg)');
        array_img.first().css('transform', 'rotateY(0)');

        let i = 0;

        setTimeout(function () {
            let timerId = setTimeout(function tick() {
                array_img.css('transition', 'all 1s ease-in');
                // array_img(i).css('transform', 'rotateY(90deg)')
                array_img.eq(i).css('transform', 'rotateY(90deg)');
                if(i === array_img.length - 1){
                    i = -1;
                }
                i++;
                array_img.eq(i).css('transform', 'rotateY(0)').css('transition', 'all 1s ease-out 1s');

                timerId = setTimeout(tick, interval);
            }, delay);
        }, delay);





    }

    // Show mobile menu
    $('.header .button').click(function(){
        $('.header .button').hide();
        $('.cross').show();
        $('.menu').slideToggle();
        $('.blackBlock').animate({
            opacity: 'toggle',
            height: 'toggle'
        });
    });

    // Hide menu on click black block
    $('.blackBlock').click(function () {
        $('.header .button').show();
        $('.cross').hide();
        $('.menu').slideToggle();
        $('.blackBlock').animate({
            opacity: 'toggle',
            height: 'toggle'
        });
    });

    // Show menu mobile and button close
    function showMB(){
        if($(window).width() > 1244) {
            $('.menu').show();
        } else {
            $('.cross').hide();
            $('.menu').hide();
        }
    }
    showMB();
    $(window).resize(function(){
        showMB();
    });


    // Close mobile menu
    $('.cross').click(function () {
        $('.header .button').show();
        $('.cross').hide();
        $('.menu').slideToggle();
        $('.blackBlock').animate({
            opacity: 'toggle',
            height: 'toggle'
        });
    });

    // Services 3 button
    $('.price1').click(function(){
        if($('.price1').hasClass('scale')){
            $('.price1').removeClass('scale');
            $('.price1_id').slideUp();
            $('.what_work').slideDown();
        } else {
            $('.price1').addClass('scale');
            $('.price2').removeClass('scale');
            $('.price3').removeClass('scale');
            $('.price1_id').slideDown();
            $('.price2_id').slideUp();
            $('.price3_id').slideUp();
            $('.what_work').slideUp();
        }
    });
    $('.price2').click(function(){
        if($('.price2').hasClass('scale')){
            $('.price2').removeClass('scale');
            $('.price2_id').slideUp();
            $('.what_work').slideDown();
        } else {
            $('.price2').addClass('scale');
            $('.price1').removeClass('scale');
            $('.price3').removeClass('scale');
            $('.price2_id').slideDown();
            $('.price1_id').slideUp();
            $('.price3_id').slideUp();
            $('.what_work').slideUp();
        }
    });
    $('.price3').click(function(){
        if($('.price3').hasClass('scale')){
            $('.price3').removeClass('scale');
            $('.price3_id').slideUp();
            $('.what_work').slideDown();
        } else {
            $('.price3').addClass('scale');
            $('.price2').removeClass('scale');
            $('.price1').removeClass('scale');
            $('.price3_id').slideDown();
            $('.price2_id').slideUp();
            $('.price1_id').slideUp();
            $('.what_work').slideUp();
        }
    });

    // calc

    $('.calc_next').click(function(){
        $('.quest.show').removeClass('show').next().addClass('show');
        nextPrev();
    });
    $('.calc_prev').click(function(){
        $('.quest.show').removeClass('show').prev().addClass('show');
        nextPrev();
    });
    nextPrev();
    function nextPrev() {
        if($('#quest1').hasClass('show')){
            $('.calc_prev').css('opacity', '0').css('z-index', '-100');
        //    $('.calc_prev').css('cursor', 'default');
            return 'return';
        } else {
            $('.calc_prev').css('opacity', '1').css('z-index', '100');;
        }
        if($('#quest5').hasClass('show')){
            $('.calc_next').css('opacity', '0').css('z-index', '-100');
        } else {
            $('.calc_next').css('opacity', '1').css('z-index', '100');;
        }
    }

});
