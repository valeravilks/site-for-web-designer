import '../less/style.less';
import $ from 'jquery'
import 'jquery-cropper';


$(document).ready(function(){

    // active menu item
    let actionMenu = $('.active_page');
    actionMenu.children().children().show();

    // menu circle item hover show/hide
    $('.header .menu a').hover(function(e){
        let eventObject = $(e.target);
        if(!eventObject.parent().hasClass('active_page')){
            eventObject.children().toggle();
        }
    });

    rotate('.img3_1', 5000);
    rotate('.img7_1', 5000);
    rotate('.img8_1', 5000);
    rotate('.img9_1', 5000);
    rotate('.img10_1', 5000);
    rotate('.img11_1', 5000);
    rotate('.img13_1', 5000);
    rotate('.img14_1', 5000);

    // function rotate element
    function rotate(selector, interval, delay){
        let array_img = $(selector).children().children();
        console.log(array_img);

        array_img.not(':eq(0)').css('transform', 'rotateY(90deg)');
        array_img.first().css('transform', 'rotateY(0)');

        let i = 0;

        let timerId = setTimeout(function tick() {
            array_img.css('transition', 'all 1s ease');
           // array_img(i).css('transform', 'rotateY(90deg)')
            array_img.eq(i).css('transform', 'rotateY(90deg)');
            if(i === array_img.length - 1){
                i = -1;
            }
            i++;
            array_img.eq(i).css('transform', 'rotateY(0)').css('transition', 'all 1s ease 1s');

            timerId = setTimeout(tick, interval);
        }, interval);



    }
});

