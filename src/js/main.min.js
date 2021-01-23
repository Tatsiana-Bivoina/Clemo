var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'swiper-pagination-bullet',
      clickable: true,
    },
    mousewheel: {
      invert: true,
    },
    autoplay: {
      delay: 3000,
      stopOnLastSlide: true,
    },
    grabCursor: true,
  });
