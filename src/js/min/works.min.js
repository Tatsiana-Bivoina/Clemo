import {burger} from '../js/main.min.js';

let burgerMenu = document.querySelector('.burger-menu');
burgerMenu.addEventListener('click', burger);

let workList = document.querySelector('.work-list');

function clearClass(arrElements, classNameEl) {
    for (let i = 0; i < arrElements.length; i++) {
      const btn = arrElements[i];
      if(btn.classList.contains(classNameEl)) {
        btn.classList.remove(classNameEl)
      }
    }
}


workList.addEventListener('click', function(e) {
    let currentEl = e.target;
    if(!currentEl.classList.contains('work-list-button')) return;

    let workListButton = currentEl;
    if(workListButton.classList.contains('active')) return;

    let btns = this.querySelectorAll('.work-list-button');
    clearClass(btns, 'active');
    workListButton.classList.add('active');

    let photoBlocks = document.querySelectorAll('.photo-block');
    let btnId = workListButton.id;

    clearClass(photoBlocks, 'hide');

    if(btnId === 'item-all') return;

    for (let i = 0; i < photoBlocks.length; i++) {
    const photoBlock = photoBlocks[i];
    let dataValue = photoBlock.dataset.item;
    if(dataValue !== btnId) {
        photoBlock.classList.add('hide');
    }
  }
});