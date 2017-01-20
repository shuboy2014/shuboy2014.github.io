/**
 * Created by shubham on 17/1/17.
 */

$(document).ready(function () {
    
    $('.img-bounce').hover(function () {
        $(this).attr('class', 'img-bounce animated bounce infinite');
    }, function () {
        $(this).attr('class', 'img-bounce');
    });

});