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

  function showGetInTouch1(event) {
    event.preventDefault();
    document.getElementById("wr-get-in-touch").style.display="none";
    document.getElementById("wr-get-in-touch-1").style.display="block";
  }

  function showGetInTouch(event) {
    event.preventDefault();
    document.getElementById("formInput1").value = "";
    document.getElementById("formInput2").value = "";
    document.getElementById("textarea").value = "";
    document.getElementById("wr-get-in-touch-1").style.display="none";
    document.getElementById("wr-get-in-touch").style.display="block";
  }
