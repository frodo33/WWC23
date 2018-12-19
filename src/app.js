require('./scss/main.scss');

$(() => {
    const $hamburger = $('.page-nav_hamburger');
    const $top = $('.top');
    const $bottom = $('.bottom');
    const $nav = $('.page-nav_menu');

    // hamburger menu

    $hamburger.on('click', function () {
        $nav.toggleClass('mobile');

        if ($nav.hasClass('mobile')) {
            $(this).css({
                transform: 'rotate(45deg)',
                transition: '0.3s linear'
            });

            $top.css({
                opacity: '0',
                transition: '0.3s'
            });

            $bottom.css({
                transform: 'rotate(-90deg) translateX(17.5px)',
                transition: '0.3s linear'
            })
        }
        else {
            $(this).css({
                transform: 'rotate(0deg)',
                transition: '0.3s linear'
            });

            $top.css({opacity: '1'});

            $bottom.css({
                transform: 'rotate(0deg) translate(0, -50%)',
                transition: '0.3s linear'
            })
        }
    })


    // scroll

    $("a[href^='#']").on('click', function (e) {
        e.preventDefault();
        $nav.removeClass('mobile');

        $hamburger.css({
            transform: 'rotate(0deg)',
            transition: '0.3s linear'
        });

        $top.css({opacity: '1'});

        $bottom.css({
            transform: 'rotate(0deg) translate(0, -50%)',
            transition: '0.3s linear'
        })

        let position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position - 80 + 'px'
        }, 1000);
    });

    // gallery

    function gallery() {
        const $images = $('.profile_gallery').children();

        console.log($images);
        $images.on('click', function () {
            console.log($(this).find('img').attr('src'));


            const modal = $(`
                    <div class="gallery">
                        <div class="item">
                            <img src="${$(this).find('img').attr('src')}" alt="">
                            <button class="close_btn">X</button>
                            <button class="next_btn"> > </button>
                            <button class="prev_btn"> < </button>
                        </div>
                    </div>
            `)

            $('body').append(modal);
        })
    }

    gallery();
});