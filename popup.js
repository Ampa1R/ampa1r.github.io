$('.w-popup-show').click(function(){
    $('body').addClass('w-popup-body');
    $('.w-popup').removeClass('modal-hide');
    $('.w-popup').addClass('modal-show');
    $('.content-border').bind('touchmove', function(e){e.preventDefault()})
    var x = $(this).attr("id");
    $('.w-popup-content-' + x).removeClass('hide');
});

$('.w-popup-close').click(function(){
    $('.w-popup').scrollTop(0);
    $('body').removeClass('w-popup-body');
    $('.w-popup').removeClass('modal-show');
    $('.w-popup').addClass('modal-hide');
    $('.content-border').unbind('touchmove')
    var y = ["a","b","c"];
    $.each(y, function(index, value){$('.w-popup-content-' + value).addClass('hide');});
});
$('.totop').click(function(){
    $('.w-popup').animate({scrollTop:0}, 500, 'swing');
});
$(window).scroll(function(){
  parallax();
});

function parallax(){
  var scrolled = $(window).scrollTop();
  $('.bg').css('top',-(scrolled*0.6)+'px');
  $('header .content').css('top',50+(scrolled*0.07)+'%');
  $('header .content').css('opacity',1-(scrolled*0.02)/10);
};
//$(".w-popup-dialog").click(function(event) {
//    event.stopPropagation();
//});
