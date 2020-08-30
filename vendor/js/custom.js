

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

    });