let lastId = '';
let array;

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

var swiperWrClientsSays = new Swiper('.clients-says-slider', {
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

function findTextBlock(id, name) {
  if (lastId != ''){
    document.getElementById(lastId).style.display="none";
    document.getElementById(id).style.display="flex";
    array= document.getElementsByClassName('brand-container active');
    array[0].classList.remove('active');
    name.classList.add('active');
  }
  else {
    document.getElementById('brandNewBrand').style.display="none";
    document.getElementById(id).style.display="flex";
    name.classList.add('active');
  }
  lastId = id;
}

  document.getElementById('burger').onclick = function burger() {
    document.getElementById('burger').classList.toggle('active');
    document.getElementById('navigation').classList.toggle('active');
    document.body.classList.toggle('lock');
  }




  function showGetInTouch1(event) {
    event.preventDefault();
    document.getElementById('wr-get-in-touch').style.display='none';
    document.getElementById('wr-get-in-touch-1').style.display='block';
  }

  function showGetInTouch(event) {
    event.preventDefault();
    document.getElementById('formInput1').value = '';
    document.getElementById('formInput2').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('wr-get-in-touch-1').style.display='none';
    document.getElementById('wr-get-in-touch').style.display='block';
  }

