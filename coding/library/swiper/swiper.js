document.addEventListener("DOMContentLoaded", function () {
  const swiper = document.querySelector(".swiper");
  const images = swiper.querySelectorAll("img");
  let currentIndex = 0;

  function showImage(index) {
    images[currentIndex].style.opacity = 0;
    currentIndex = index;
    images[currentIndex].style.opacity = 1;
  }

  function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
  }

  function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
  }

  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
});
