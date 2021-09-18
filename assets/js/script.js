$(document).ready(function () {
    setTimeout(() => {
        $(".preloader").fadeOut();
    }, 2000);

    new Typed('#best', {
        strings: 'Best Service',
        typeSpeed: 40,
        delaySpeed: 90,
        loop: true
    });

})