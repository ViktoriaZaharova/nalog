$(document).ready(function() {
    $('.drop-nav-content li a').click(function (e) {
        e.preventDefault();
        $(this).siblings('.sub-drop').slideToggle();
    });

    $('.list-item-link').click(function () {
       $('.dropdown-menu').slideToggle();
    });

    $('.btn-mobile-menu').click(function () {
        $('.header-bottom').toggleClass('active');
    });

    $('.btn-close').click(function () {
        $('.header-bottom').removeClass('active');
    });
});
