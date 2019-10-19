$(document).ready(function () {

    var spinner_in = $('.spinner .animated');

setTimeout(function() {
    spinner_in.removeClass('slideInDown').addClass('zoomOutDown')
    $('.spinner').fadeOut(700);
}, 1000);
    


    var owl = $('.main_carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,

        autoplaySpeed: 200,
        autoplayHoverPause: true,

    });


    function setAnimation(_elem, _InOut) {
        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        _elem.each(function () {
            var $elem = $(this);
            var $animationType = 'slide' + _InOut;

            $elem.addClass($animationType).one(animationEndEvent, function () {
                $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
            });
        });
    }

    // Fired before current slide change
    owl.on('change.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var animated = $currentItem.find('.animated')
        setAnimation(animated, 'OutDown');
    });

    // Fired after current slide has been changed
    owl.on('changed.owl.carousel', function (event) {
        var $currentItem = $('.owl-item', owl).eq(event.item.index);
        var animated = $currentItem.find('.animated')
        setAnimation(animated, 'InUp');
    })




    var team_carousel = $('.team_carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 4,
        autoplay: true,
        autoplaySpeed: 200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            360: {
                items: 2,
            },
            900: {
                items: 4,
            }
        }
    });

    $('span.left').click(function (e) {
        e.preventDefault();
        team_carousel.trigger('prev.owl.carousel');
    });
    $('span.right').click(function (e) {
        e.preventDefault();
        team_carousel.trigger('next.owl.carousel');
    });


    $('.burger').click(function () {
        $('.hide_nav').fadeIn(0).removeClass('zoomOut').addClass('zoomIn');
        var links = $('.header_main nav a').clone(),
            social = $('.scocial  a').clone();
        $('.inner').html('')
        $('.inner').append(links)

        $('.soc_h').html('')
        $('.soc_h').append(social)


    });
    $('.close').click(function () {
        $('.hide_nav').removeClass('zoomIn').addClass('zoomOut').fadeOut(500)

    });

$('.e_qanun').click(function (e) { 
    e.preventDefault();
    alert('sdf')
    var url = $(this).attr('href');
    window.open(url,'new','_self')
});

});         