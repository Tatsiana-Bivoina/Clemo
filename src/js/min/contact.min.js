import {burger, showGetInTouch1, showGetInTouch} from '../js/main.min.js';

let blockForm1 = document.getElementById('form-1');
let blockForm2 = document.getElementById('form-2');
let burgerMenu = document.querySelector('.burger-menu');


blockForm1.addEventListener('submit', showGetInTouch1);
blockForm2.addEventListener('submit', showGetInTouch);
burgerMenu.addEventListener('click', burger);