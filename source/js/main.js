console.log("Привет, ты смотришь проект Погнали");

// Content
let header = document.querySelector('.header');
let nav = document.querySelector('.header__nav-btn');
let headerNavBox = document.querySelector('.header__nav-box');
let logoImg = document.querySelector('.logo__img');

// Popup
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.tariffs__btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');


nav.addEventListener('click', function(e) {
  nav.classList.toggle('header__nav-btn--active');
  headerNavBox.classList.toggle('header__nav-box--opened');
  header.classList.toggle('header--bg-white');

  setInterval(function(){
    if(nav.classList.contains('header__nav-btn--active')) {
      logoImg.setAttribute('src', 'img/logo-mobile-blue@1x.png');
    }

    else {
      logoImg.setAttribute('src', 'img/logo-mobile-white@1x.png');
    }
  }, 100)
});

popupOpenBtn.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.add('popup--opened');
});

popupCloseBtn.addEventListener('click', function(e) {
  popup.classList.remove('popup--opened');
});
