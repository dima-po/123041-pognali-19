console.log("Привет, ты смотришь проект Погнали");

// Content
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let navBtn = document.querySelector('.header__nav-btn');
// let headerNavBox = document.querySelector('.header__nav-box');
let logoImg = document.querySelector('.header__logo-img');
let logoImgTablet = document.querySelector('.header__logo-tablet');

// Popup
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.tariffs__btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');


navBtn.addEventListener('click', function(e) {
  navBtn.classList.toggle('header__nav-btn--active');
  nav.classList.toggle('nav--opened');
  header.classList.toggle('header--bg-white');

  setInterval(function(){
    if(navBtn.classList.contains('header__nav-btn--active')) {
      logoImg.setAttribute('src', 'img/logo-mobile-blue@1x.png');
      logoImgTablet.setAttribute('srcset', 'img/logo-tablet-blue@1x.png');
    }

    else {
      logoImg.setAttribute('src', 'img/logo-mobile-white@1x.png');
      logoImgTablet.setAttribute('srcset', 'img/logo-tablet-white@1x.png');
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
