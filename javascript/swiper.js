var testimonialThumbs = new Swiper(".testimonial__thumbs", {
  spaceBetween: 10,
  slidesPerView: 3,
  centeredSlides: true,
  freeMode: true,
  autoplay: true,
  loop: true,
  speed: 3000
});
var testimonialContent = new Swiper(".testimonial__comment", {
  spaceBetween: 10,
  autoplay: true,
  loop: true,
  speed: 3000,
  thumbs: {
      swiper: testimonialThumbs
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true
  }
});