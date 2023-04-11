document.addEventListener("DOMContentLoaded", function () {
  let swiper = document.querySelector(".slider");
  const images = swiper.querySelectorAll("img.tugo");
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

  const nextButton = document.querySelector(".next2");
  const prevButton = document.querySelector(".prev2");

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);
});
