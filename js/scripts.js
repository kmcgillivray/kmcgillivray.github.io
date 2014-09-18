var main = function() {
  $('.menu-toggle').click(function() {
    $('.nav-menu').slideToggle();
    $('.menu-button').toggleClass('fa-bars').toggleClass('fa-times');
  });
}

$(document).ready(main);