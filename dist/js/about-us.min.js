import {burger, showGetInTouch1, showGetInTouch} from '../js/main.min.js';

let swiperWrBestTeam = new Swiper('.best-team-slider', {
    slideClass:'team-members',
    slidesPerView: 3,
    speed: 1000,
    lazyLoading: true,
    setWrapperSize: true,
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
    breakpoints: {
      240: {
        slidesPerView: 1,
      },
      380: {
        slidesPerView: 1,
      },
      430: {
        slidesPerView: 2,
      },
      540: {
        slidesPerView: 3
      }}
  });

let blockForm1 = document.getElementById('form-1');
let blockForm2 = document.getElementById('form-2');
let burgerMenu = document.querySelector('.burger-menu');


blockForm1.addEventListener('submit', showGetInTouch1);
blockForm2.addEventListener('submit', showGetInTouch);
burgerMenu.addEventListener('click', burger);
