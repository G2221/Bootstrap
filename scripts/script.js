$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $(document).ready(function () {
        $('.single-item').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            arrows: true,
        });
    });

    $('.product-image').magnificPopup({
        type: 'image',
    });

    $(function () {
            $("#accordion").accordion({})
        }
    );


    let inputZipCode = document.getElementById('inputZipCode4');
    inputZipCode.onkeypress = (e) => {
        if (isNaN(parseInt(e.key))) {
            return false;
        }

    }
})