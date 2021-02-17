import {burger} from '../js/main.min.js';

let burgerMenu = document.querySelector('.header__burger-menu');
burgerMenu.addEventListener('click', burger);

let newsList = document.querySelector('.news__nav');

function clearClass(arrElements, classNameEl) {
    for (let i = 0; i < arrElements.length; i++) {
      const btn = arrElements[i];
      if(btn.classList.contains(classNameEl)) {
        btn.classList.remove(classNameEl)
      }
    }
}


newsList.addEventListener('click', function(e) {
    let currentEl = e.target;
    if(!currentEl.classList.contains('news__btn')) return;

    let newsBtn = currentEl;
    if(newsBtn.classList.contains('news__btn_active')) return;

    let btns = this.querySelectorAll('.news__btn');
    clearClass(btns, 'news__btn_active');
    newsBtn.classList.add('news__btn_active');

    let newsContainers = document.querySelectorAll('.news__container');
    let btnId = newsBtn.id;

    clearClass(newsContainers, 'news__container_hide');

    if(btnId === 'item-all') return;

    for (let i = 0; i < newsContainers.length; i++) {
    const newsContainer = newsContainers[i];
    let dataValue = newsContainer.dataset.item;
    if(dataValue !== btnId) {
        newsContainer.classList.add('news__container_hide');
    }
  }
});