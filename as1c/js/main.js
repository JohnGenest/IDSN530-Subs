$(document).ready(function() {
    $(document).ready(function() {
        // 1. Sticky Navigation with Animation
        let nav = $('nav');
        let navTop = nav.offset().top;
        
        $(window).scroll(function() {
            if ($(window).scrollTop() >= navTop) {
                nav.addClass('sticky');
                nav.slideDown();
            } else {
                nav.removeClass('sticky');
            }
        });
    
        // 2. Smooth Scroll
        $('nav a[href^="#"]').click(function(e) {
            e.preventDefault();
            let target = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(target).offset().top - nav.height()
            }, 800);
        });
    
        // 3. Image Hover Effect
        $('.imgbox').hover(
            function() {
                $(this).find('img').css({
                    'transform': 'scale(1.05)',
                    'transition': 'transform 0.3s ease'
                });
            },
            function() {
                $(this).find('img').css({
                    'transform': 'scale(1)',
                    'transition': 'transform 0.3s ease'
                });
            }
        );
    
        // 4. Content Loading Animation
        $(document).ready(function() {
            $('section').css('opacity','0');
            setTimeout(function() {
                $('section').each(function(i) {
                    $(this).delay(100 * i).animate({
                        opacity: 1
                    }, 500);
                });
            }, 500);
        });
    
        // 5. Banner Text Animation
        $('.banner h1, .banner h2').css('opacity', '0');
        $('.banner h1').animate({
            opacity: 1,
            left: '0'
        }, 1000);
        $('.banner h2').delay(500).animate({
            opacity: 1,
            right: '0'
        }, 1000);
    });

    // 6. Scroll Progress Bar
    $(window).scroll(function() {
        let windowHeight = $(document).height() - $(window).height();
        let scrollPercent = ($(window).scrollTop() / windowHeight) * 100;
        $('#progress-bar').css('width', scrollPercent + '%');
    });

    // 7. Back to Top Button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
           $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // 8. Text Highlight Effect
    $('h2, h3').addClass('highlight-text').hover(
        function() {
            $(this).css('transform', 'translateX(10px)');
        },
        function() {
            $(this).css('transform', 'translateX(0)');
        }
    );

    // 9. Loading Spinner
    $(window).on('load', function() {
        setTimeout(function() {
            $('#loader-wrapper').addClass('loader-hide');
        }, 500);
    });
});