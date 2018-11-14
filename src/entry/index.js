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
});
