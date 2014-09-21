var main = function() {
  $('.menu-toggle').click(function() {
    $('.nav-menu').slideToggle(300);
    $('.menu-button').toggleClass('fa-bars').toggleClass('fa-times');
  });
  
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      
      if (scroll >= 100) {
        $(".sidebar").addClass("sidebar-scroll");
        $(".main").addClass("main-scroll");
      } else {
        $(".sidebar").removeClass("sidebar-scroll");
        $(".main").removeClass("main-scroll");
      }
  });
  
  var offset = 20;

  $('.sidebar-nav li a').click(function(event) {
      event.preventDefault();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -offset);
  });
}

$(document).ready(main);