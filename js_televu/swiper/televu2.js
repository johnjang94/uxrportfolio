var swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: true,
  centerSlide: "true",
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
