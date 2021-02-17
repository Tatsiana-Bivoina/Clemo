let lastId = '';
let element;


export  function findTextBlock(id, activeId) {
  if (lastId != ''){
    document.getElementById(lastId).style.display="none";
    document.getElementById(id).style.display="flex";
    element = document.querySelector('.brand-container.active');
    element.classList.remove('active');
    activeId.classList.add('active');
  }
  else {
    document.getElementById('brandNewBrand').style.display="none";
    document.getElementById(id).style.display="flex";
    activeId.classList.add('active');
  }
  lastId = id;
 
}

export  function burger() {
  document.getElementById('burger').classList.toggle('active');
  document.getElementById('navigation').classList.toggle('active');
  document.body.classList.toggle('lock');
  
}

export  function showGetInTouch1(event) {
  event.preventDefault();
  document.getElementById('wr-get-in-touch').style.display='none';
  document.getElementById('wr-get-in-touch-1').style.display='block';

}

export  function showGetInTouch(event) {
  event.preventDefault();
  document.getElementById('formInput1').value = '';
  document.getElementById('formInput2').value = '';
  document.getElementById('textarea').value = '';
  document.getElementById('wr-get-in-touch-1').style.display='none';
  document.getElementById('wr-get-in-touch').style.display='block';

}
