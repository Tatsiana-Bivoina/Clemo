import {burger, findTextBlock, showGetInTouch1, showGetInTouch} from '../js/main.min.js';


// ..............................burger-menu.......................
let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', burger);

// .................................slider ClientsSays....................................

let brandContainer1 = document.getElementById('brand-1');
let brandContainer2 = document.getElementById('brand-2');
let brandContainer3 = document.getElementById('brand-3');
let brandContainer4 = document.getElementById('brand-4');
let brandContainer5 = document.getElementById('brand-5');
let brandContainer6 = document.getElementById('brand-6');
let brandContainer7 = document.getElementById('brand-7');
let brandContainer8 = document.getElementById('brand-8');

brandContainer1.addEventListener('click', () => {findTextBlock("brandNewBrand", brandContainer1)});
brandContainer2.addEventListener('click', () => {findTextBlock("brandClementina", brandContainer2)});
brandContainer3.addEventListener('click', () => {findTextBlock("brandFrankSims", brandContainer3)});
brandContainer4.addEventListener('click', () => {findTextBlock("brandCooper", brandContainer4)});
brandContainer5.addEventListener('click', () => {findTextBlock("brandNewBrand", brandContainer5)});
brandContainer6.addEventListener('click', () => {findTextBlock("brandClementina", brandContainer6)});
brandContainer7.addEventListener('click', () => {findTextBlock("brandFrankSims", brandContainer7)});
brandContainer8.addEventListener('click', () => {findTextBlock("brandCooper", brandContainer8)});

// ................................block get-in-touch..............................
let blockForm1 = document.getElementById('form-1');

blockForm1.addEventListener('submit', showGetInTouch1);

// ................................block get-in-touch1..............................
let blockForm2 = document.getElementById('form-2');
blockForm2.addEventListener('submit', showGetInTouch);


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