const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    allowSlideNext: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slideClass: 'swiper-slide2',
    
    spaceBetween: 55,
    slidesPerView: 2,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        440: {
            spaceBetween: -5,
            slidesPerView: 2,
        },
        490: {
            spaceBetween: -65,
            slidesPerView: 2,
        },
        540: {
            spaceBetween: -125,
            slidesPerView: 2,
        },
        590: {
            spaceBetween: -200,
            slidesPerView: 2,
        },
        640: {
            spaceBetween: 25,
            slidesPerView: 3,  
        },
        690: {
            spaceBetween: -45,
            slidesPerView: 3, 
        },
        740: {
            spaceBetween: -115,
            slidesPerView: 3, 
        },
        768: {
            spaceBetween: 0,
            slidesPerView: 2, 
        },
        800: {
            spaceBetween: -25,
            slidesPerView: 2, 
        },
        900: {
            spaceBetween: -145,
            slidesPerView: 2, 
        },
        1000: {
            spaceBetween: -285,
            slidesPerView: 2, 
        },
        1100: {
            spaceBetween: 70,
            slidesPerView: 3, 
        },
        1200: {
            spaceBetween: 0,
            slidesPerView: 2, 
        },
        1300: {
            spaceBetween: -100,
            slidesPerView: 2, 
        },
        1400: {
            spaceBetween: -200,
            slidesPerView: 2, 
        },
        1500: {
            spaceBetween: 25,
            slidesPerView: 2.5, 
        },
        1600: {
            spaceBetween: 25,
            slidesPerView: 2.5, 
        },
        1700: {
            spaceBetween: -80,
            slidesPerView: 2.5, 
        },
        1800: {
            spaceBetween: 150,
            slidesPerView: 3, 
        },
        1900: {
            spaceBetween: 75,
            slidesPerView: 3, 
        },
        1920: {
          spaceBetween: -5,
          slidesPerView: 3,
        },
    } 
  });