

    $(document).ready(function(){
        $(".navbar-nav .nav-link").on("click", function(){
            $(".navbar-nav").find(".active").removeClass("active");
            $(this).addClass("active");
        });
        $(".owl-carousel").owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:1,
            smartSpeed:100,
            autoplay:true
        });
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
        });
        $(document).ready(function() {
            var popup_btn = $('.popup-btn');
            popup_btn.magnificPopup({
                type : 'image',
                gallery : {
                    enabled : true
                }
            });
        });


    });