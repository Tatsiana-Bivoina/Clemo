import {burger, showGetInTouch1, showGetInTouch, findTextBlock} from '../js/main.min.js';

let swiperWrIntro = new Swiper('.intro-slider', {
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


let swiperWrClientsSays = new Swiper('.clients-says-slider', {
    slidesPerView: 4,
    pagination: {
     el: '.swiper-pagination',
     clickable: true,
     dynamicBullets: true,
     dynamicMainBullets: 3,
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
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,  
      }
    }
});

// .................................slider ClientsSays....................................

let brandContainer1 = document.getElementById('brand-1');
let brandContainer2 = document.getElementById('brand-2');
let brandContainer3 = document.getElementById('brand-3');
let brandContainer4 = document.getElementById('brand-4');
let brandContainer5 = document.getElementById('brand-5');
let brandContainer6 = document.getElementById('brand-6');

brandContainer1.addEventListener('click', () => {findTextBlock("brandNewBrand", brandContainer1)});
brandContainer2.addEventListener('click', () => {findTextBlock("brandClementina", brandContainer2)});
brandContainer3.addEventListener('click', () => {findTextBlock("brandFrankSims", brandContainer3)});
brandContainer4.addEventListener('click', () => {findTextBlock("brandCooper", brandContainer4)});
brandContainer5.addEventListener('click', () => {findTextBlock("brandNewBrand", brandContainer5)});
brandContainer6.addEventListener('click', () => {findTextBlock("brandClementina", brandContainer6)});

//....................................Burger menu..................................
let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', burger);

// ................................block get-in-touch..............................
let blockForm1 = document.getElementById('form-1');

blockForm1.addEventListener('submit', showGetInTouch1);

// ................................block get-in-touch1..............................
let blockForm2 = document.getElementById('form-2');
blockForm2.addEventListener('submit', showGetInTouch);