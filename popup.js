$('.w-popup-show').click(function(){
    $('body').addClass('w-popup-body');
    $('.w-popup').removeClass('modal-hide');
    $('.w-popup').addClass('modal-show');
    var x = $(this).attr("id");
    $('.w-popup-content-' + x).removeClass('hide');
});

$('.w-popup-close').click(function(){
    $('.w-popup').scrollTop(0);
    $('body').removeClass('w-popup-body');
    $('.w-popup').removeClass('modal-show');
    $('.w-popup').addClass('modal-hide');
    var y = ["a","b","c"];
    $.each(y, function(index, value){$('.w-popup-content-' + value).addClass('hide');});
});
$('.totop').click(function(){
    $('.w-popup').animate({scrollTop:0}, 500, 'swing');
});
//$(".w-popup-dialog").click(function(event) {
//    event.stopPropagation();
//});