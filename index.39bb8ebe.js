document.addEventListener("DOMContentLoaded",(function(){if(window.innerWidth<=767){new Swiper(".mySwiper",{loop:!0,allowSlideNext:!0,slideClass:"swiper-slide1",spaceBetween:5,slidesPerView:2,autoplay:{delay:5e3,disableOnInteraction:!1}})}else{const e=document.querySelector("#news-container-for-gradient"),s=document.querySelector("#news-card-list"),i=Array.from(s.children);e.classList.remove("swiper"),e.classList.remove("mySwiper"),s.classList.remove("swiper-wrapper"),i.forEach((e=>{e.classList.remove("swiper-slide"),e.classList.remove("swiper-slide1")}))}}));
//# sourceMappingURL=index.39bb8ebe.js.map
