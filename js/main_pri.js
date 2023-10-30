function submitForm() {
    $.ajax({
        url: "/api/qry",
        type: "POST",
        data: {
            // add any data you want to send to the server here
        },
        success: function (response) {
            // handle the response from the server here
        },
        error: function (xhr, status, error) {
            // handle any errors here
        }
    });
}
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').slideUp(200);
        } else {
            $('.navbar').slideDown(200);
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn(200);
        } else {
            $('.scroll-to-top').fadeOut(200);
        }
    });

    $('.scroll-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });
});
