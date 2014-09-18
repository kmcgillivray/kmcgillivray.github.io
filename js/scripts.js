var main = function() {
  $('.menu-toggle').click(function() {
    $('.nav-menu').slideToggle();
    
    $('.menu-button').toggleClass('fa-bars').toggleClass('fa-times');
    $('.menu-toggle').toggleClass('open');
  });
  
  $('.open').click(function() {
    $('.nav-menu').animate({
      left: '-285px'
    }, 200);
    
    $('body').animate({
      left: '0px'
    }, 200);
    
    $('.menu-button').removeClass('fa-times').addClass('fa-bars');
  });
}

$(document).ready(main);