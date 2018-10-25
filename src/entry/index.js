import '../less/style.less';
import $ from 'jquery';

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


});

