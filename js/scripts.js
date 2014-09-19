var main = function() {
  $('.menu-toggle').click(function() {
    $('.nav-menu').slideToggle(300);
    $('.menu-button').toggleClass('fa-bars').toggleClass('fa-times');
  });
}

$(document).ready(main);