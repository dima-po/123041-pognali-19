console.log("Привет, ты смотришь проект Погнали");

// =================== Map

var mapContainer = document.getElementById("map");

if (mapContainer !== null) {
  ymaps.ready(init);
  var myMap;

  function init () {
    myMap = new ymaps.Map("map",
        {
            // Географические координаты центра отображаемой карты.
            center: [41.312650, 69.279087],
            // Масштаб.
            zoom: 13,
            controls: [],
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    ),
    myPlacemark = new ymaps.Placemark([41.312650, 69.279087], {
      balloonContent: 'Метка на карте'
    },
    {
      preset: 'islands#governmentCircleIcon',
      iconColor: '#3b5998'
    });

    myMap.geoObjects.add(myPlacemark);
  }
}
// ==========================


// ========================= Header & Navigation
var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var navBtn = document.querySelector(".header__nav-btn");

// Scroll Event
var headerHeight = header.clientHeight;
window.addEventListener("scroll", function() {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--fixed");
    nav.classList.add("nav--fixed");

  } else {
    header.classList.remove("header--fixed");
    nav.classList.remove("nav--fixed");
  }
});

// Open tablet and mobile menu
navBtn.addEventListener("click", function(e) {
  navBtn.classList.toggle("header__nav-btn--active");
  nav.classList.toggle("nav--opened");
  header.classList.toggle("header--menu-opened");
});

//=================================


// ================== Popup
var popup = document.querySelector(".popup");
var popupOpenBtn = document.querySelector(".tariffs__btn");
var popupCloseBtn = document.querySelector(".popup__close-btn");

if (popupOpenBtn !== null && popupCloseBtn !== null) {

  popupOpenBtn.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.add("popup--opened");
  });

  popupCloseBtn.addEventListener("click", function(e) {
    popup.classList.remove("popup--opened");
  });
}
// ========================



//======================= Companion form page dropdown
var selectCountryField = document.querySelector(".step-route__country-name--select");
var selectCountryFieldIcon = document.querySelector(".step-route__country-name--select .step-route__icon");
var selectCountryFieldCloseBtn = document.querySelector(".step-route__country-delete-btn--dropdown");
var countryFieldDropdown = document.querySelector(".step-route__dropdown");

if (selectCountryField !== null) {
  selectCountryField.addEventListener("click", function() {
  selectCountryFieldIcon.classList.toggle("step-route__icon--dropdown");
  selectCountryField.classList.toggle("step-route__country-name--show-dropdown");
  selectCountryFieldCloseBtn.classList.toggle("step-route__country-delete-btn--hide");
  countryFieldDropdown.classList.toggle("step-route__dropdown--hide");
  })
}
//======================


//======================= Companions catalog page countries filter
var filterMain = document.querySelector(".companions-country-filter");
var filterOpenBtn = document.querySelector(".companions-country-filter__button--open");
var filterCloseBtn = document.querySelector(".companions-country-filter__button--close");
var filterCloseBtnBottom = document.querySelector(".companions-country-filter__button--bottom");
var filterContinents = document.querySelector(".companions-country-filter__continents");
var filterContent = document.querySelector(".companions-country-filter__content-wrapper");

if (filterOpenBtn !== null && filterCloseBtn !== null && filterCloseBtnBottom !== null) {
  filterOpenBtn.addEventListener("click", function() {
    filterOpenBtn.classList.remove("companions-country-filter__button--active");
    filterMain.classList.add("companions-country-filter--active");
    filterCloseBtn.classList.add("companions-country-filter__button--active");
    filterContent.classList.add("companions-country-filter__content-wrapper--active");
    filterContinents.classList.add("companions-country-filter__continents--active");
  });

  filterCloseBtn.addEventListener("click", function() {
    filterOpenBtn.classList.add("companions-country-filter__button--active");
    filterMain.classList.remove("companions-country-filter--active");
    filterCloseBtn.classList.remove("companions-country-filter__button--active");
    filterContent.classList.remove("companions-country-filter__content-wrapper--active");
    filterContinents.classList.remove("companions-country-filter__continents--active");
  });

  filterCloseBtnBottom.addEventListener("click", function() {
    filterMain.classList.remove("companions-country-filter--active");
    filterOpenBtn.classList.add("companions-country-filter__button--active");
    filterCloseBtn.classList.remove("companions-country-filter__button--active");
    filterContent.classList.remove("companions-country-filter__content-wrapper--active");
    filterContinents.classList.remove("companions-country-filter__continents--active");
  });
}
//=========================


// =================== Catalog page filter

var tabsTitles = document.querySelectorAll(".companions-filter__tab-title");
var tabsTitlesBtn = document.querySelectorAll(".companions-filter__tab-title-btn");

if (tabsTitles !== null && tabsTitlesBtn !== null) {
  tabsTitlesBtn.forEach(function(btn, index) {
    btn.addEventListener("click", function() {
      tabsTitles[index].classList.toggle("companions-filter__tab-title--active");
    })
  })
}
// ==========================

// =================== Form validation
let companionForm = document.querySelector(".companion-add-plan__form");
let companionFormField = document.querySelector(".step-entertaiment__list-country-field");
let companionFormTextarea = document.querySelectorAll("[name='country-action-plan']");

companionForm.addEventListener("submit", function(e){

  companionFormTextarea.forEach(function(elem) {
    if(!!elem.value) {
      e.preventDefault();
      companionFormField.classList.add("step-entertaiment__list-country-field--error");
    }
    else {
      companionFormField.classList.remove("step-entertaiment__list-country-field--error");
    }
  })
})

