const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    allowSlideNext: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 75,
    slideClass: 'swiper-slide2',

    slidesPerView: 2,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1280: {
          spaceBetween: -5,
          slidesPerView: 3,
         }
      } 
  });