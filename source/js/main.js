console.log("Привет, ты смотришь проект Погнали");

// Variables
let header = document.querySelector('.header');
let nav = document.querySelector('.nav');
let navBtn = document.querySelector('.header__nav-btn');
let logoImg = document.querySelector('.header__logo-img');
let logoImgTablet = document.querySelector('.header__logo-tablet');
let popup = document.querySelector('.popup');
let popupOpenBtn = document.querySelector('.tariffs__btn');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let filterMain = document.querySelector('.companions-country-filter');
let filterOpenBtn = document.querySelector('.companions-country-filter__button--open');
let filterCloseBtn = document.querySelector('.companions-country-filter__button--close');
let filterCloseBtnBottom = document.querySelector('.companions-country-filter__button--bottom');
let filterContinents = document.querySelector('.companions-country-filter__continents');
let filterContent = document.querySelector('.companions-country-filter__content');


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

  filterOpenBtn.addEventListener('click', function() {
    filterOpenBtn.classList.remove('companions-country-filter__button--active');
    filterMain.classList.add('companions-country-filter--active');
    filterCloseBtn.classList.add('companions-country-filter__button--active');
    filterContent.classList.add('companions-country-filter__content--active');
    filterContinents.classList.add('companions-country-filter__continents--active');
  });

  filterCloseBtn.addEventListener('click', function() {
    filterOpenBtn.classList.add('companions-country-filter__button--active');
    filterMain.classList.remove('companions-country-filter--active');
    filterCloseBtn.classList.remove('companions-country-filter__button--active');
    filterContent.classList.remove('companions-country-filter__content--active');
    filterContinents.classList.remove('companions-country-filter__continents--active');
  });

  filterCloseBtnBottom.addEventListener('click', function() {

    filterOpenBtn.classList.add('companions-country-filter__button--active');
    filterCloseBtn.classList.remove('companions-country-filter__button--active');
    filterContent.classList.remove('companions-country-filter__content--active');
    filterContinents.classList.remove('companions-country-filter__continents--active');
  });



let tabsTitles = document.querySelectorAll('.companions-filter__tab-title');
for(let i = 0; i <= tabsTitles.length; i++) {
  tabsTitles[i].addEventListener('click', function() {
    tabsTitles[i].classList.toggle('companions-filter__tab-title--active');
  });
}





popupOpenBtn.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.add('popup--opened');
});

popupCloseBtn.addEventListener('click', function(e) {
  popup.classList.remove('popup--opened');
});


// Tabs



