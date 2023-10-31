function submitForm() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
    })
        .then(response => {
            if (response.ok) {
                // handle the response from the server here
                return response.json();
            } else {
                // handle any errors here
                throw new Error('Network response was not ok.');
            }
        })
        .then((json) => console.log(json))
        .catch(error => {
            // handle any errors here
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
        }, 300, function () {
            $('a[name="top"]').focus();
        });
        return false;
    });
});
