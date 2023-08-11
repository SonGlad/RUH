document.addEventListener('DOMContentLoaded', function() {
    
    if (window.innerWidth <= 767) {
        
        $('.card-list').slick({
        
            // prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
            // nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
            
            
            infinite: true,
            slidesToShow: 1.93,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          
            // responsive: [
            //   {
            //     breakpoint: 1280,
            //     settings: {
            //       slidesToShow: 2,
            //     }
            //   },
            // ]
          
          
        });

    }
});