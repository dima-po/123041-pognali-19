console.log("Привет, ты смотришь проект Погнали");


// var logoImg = document.querySelector('.header__logo-img');
// var logoImgTablet = document.querySelector('.header__logo-tablet');


// ========================= Header & Navigation
var header = document.querySelector('.header');
var nav = document.querySelector('.nav');
var navBtn = document.querySelector('.header__nav-btn');

// Scroll Event
window.addEventListener('scroll', function() {
  var headerHeight = header.clientHeight;

  if (window.scrollY > headerHeight) {
    header.classList.add('header--fixed');
    nav.classList.add('nav--fixed');

  } else {{
    header.classList.remove('header--fixed');
    nav.classList.remove('nav--fixed');
  }}
});

// Open tablet and mobile menu
navBtn.addEventListener('click', function(e) {
  navBtn.classList.toggle('header__nav-btn--active');
  nav.classList.toggle('nav--opened');
  header.classList.toggle('header--bg-white');
});

//=================================


// ================== Popup
var popup = document.querySelector('.popup');
var popupOpenBtn = document.querySelector('.tariffs__btn');
var popupCloseBtn = document.querySelector('.popup__close-btn');

if (popupOpenBtn !== null && popupCloseBtn !== null) {

  popupOpenBtn.addEventListener('click', function(e) {
    e.preventDefault();
    popup.classList.add('popup--opened');
  });

  popupCloseBtn.addEventListener('click', function(e) {
    popup.classList.remove('popup--opened');
  });
}
// ========================



//======================= Companion form page dropdown
var selectCountryField = document.querySelector('.step-route__country-name--select');
var selectCountryFieldIcon = document.querySelector('.step-route__country-name--select .step-route__icon');
var selectCountryFieldCloseBtn = document.querySelector('.step-route__country-delete-btn--dropdown');
var countryFieldDropdown = document.querySelector('.step-route__dropdown');

if (selectCountryField !== null) {
  selectCountryField.addEventListener('click', function() {
  selectCountryFieldIcon.classList.toggle('step-route__icon--dropdown');
  selectCountryField.classList.toggle('step-route__country-name--show-dropdown');
  selectCountryFieldCloseBtn.classList.toggle('step-route__country-delete-btn--hide');
  countryFieldDropdown.classList.toggle('step-route__dropdown--hide');
  })
}
//======================


//======================= Companions catalog page countries filter
var filterMain = document.querySelector('.companions-country-filter');
var filterOpenBtn = document.querySelector('.companions-country-filter__button--open');
var filterCloseBtn = document.querySelector('.companions-country-filter__button--close');
var filterCloseBtnBottom = document.querySelector('.companions-country-filter__button--bottom');
var filterContinents = document.querySelector('.companions-country-filter__continents');
var filterContent = document.querySelector('.companions-country-filter__content-wrapper');

if (filterOpenBtn !== null && filterCloseBtn !== null && filterCloseBtnBottom !== null) {
  filterOpenBtn.addEventListener('click', function() {
    filterOpenBtn.classList.remove('companions-country-filter__button--active');
    filterMain.classList.add('companions-country-filter--active');
    filterCloseBtn.classList.add('companions-country-filter__button--active');
    filterContent.classList.add('companions-country-filter__content-wrapper--active');
    filterContinents.classList.add('companions-country-filter__continents--active');
  });

  filterCloseBtn.addEventListener('click', function() {
    filterOpenBtn.classList.add('companions-country-filter__button--active');
    filterMain.classList.remove('companions-country-filter--active');
    filterCloseBtn.classList.remove('companions-country-filter__button--active');
    filterContent.classList.remove('companions-country-filter__content-wrapper--active');
    filterContinents.classList.remove('companions-country-filter__continents--active');
  });

  filterCloseBtnBottom.addEventListener('click', function() {
    filterMain.classList.remove('companions-country-filter--active');
    filterOpenBtn.classList.add('companions-country-filter__button--active');
    filterCloseBtn.classList.remove('companions-country-filter__button--active');
    filterContent.classList.remove('companions-country-filter__content-wrapper--active');
    filterContinents.classList.remove('companions-country-filter__continents--active');
  });
}
//=========================


let companionForm = document.querySelector('.companion-add-plan__form');
let companionFormField = document.querySelector('.step-entertaiment__list-country-field');
let companionFormTextarea = document.querySelectorAll('[name="country-action-plan"]');

companionForm.addEventListener('submit', function(e){
  for(let i = 0; i <= companionFormTextarea.length; i++) {
    if(!!companionFormTextarea[i].value) {
      e.preventDefault();
      companionFormField.classList.add('step-entertaiment__list-country-field--error');
    }
    else {
      companionFormField.classList.remove('step-entertaiment__list-country-field--error');
    }
  }
})



// // Catalog page filter
var tabsTitles = document.querySelectorAll('.companions-filter__tab-title');
var tabsTitlesBtn = document.querySelectorAll('.companions-filter__tab-title-btn');

if (tabsTitles !== null && tabsTitlesBtn !== null) {
  for(let i = 0; i <= tabsTitlesBtn.length; i++) {
    tabsTitlesBtn[i].addEventListener('click', function() {
      tabsTitles[i].classList.toggle('companions-filter__tab-title--active');
    });
  }
}



// DELETE

// navBtn.addEventListener('click', function(e) {
//   navBtn.classList.toggle('header__nav-btn--active');
//   nav.classList.toggle('nav--opened');
//   header.classList.toggle('header--bg-white');

  // setInterval(function(){
  //   if(navBtn.classList.contains('header__nav-btn--active')) {
  //     logoImg.setAttribute('src', 'img/logo-mobile-blue@1x.png');
  //     logoImgTablet.setAttribute('srcset', 'img/logo-tablet-blue@1x.png');
  //   }

  //   else {
  //     logoImg.setAttribute('src', 'img/logo-mobile-white@1x.png');
  //     logoImgTablet.setAttribute('srcset', 'img/logo-tablet-white@1x.png');
  //   }
  // }, 100)
// });
