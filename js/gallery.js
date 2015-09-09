$(function () {
    $('a').fluidbox();
});

$(window).on('scroll', function() {
    $('a.fluidbox-opened').trigger('click');
});
