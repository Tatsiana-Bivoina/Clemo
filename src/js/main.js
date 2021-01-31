var swiperWrIntro = new Swiper('.intro-slider', {
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
  swiperWrIntro.on('click', function(){
    alert('hello');
  });

  var swiperWrBestTeam = new Swiper('.best-team-slider', {
    slideClass:'team-members',
    slidesPerView: 1,
    speed: 1000,
    lazyLoading: true,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
  });
