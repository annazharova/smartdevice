import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

let navMain = document.querySelector('.main-navigation');
let navToggle = document.querySelector('.main-navigation__toggle');
let body = document.querySelector('.page__body');
let overlay = document.querySelector('.overlay');

navMain.classList.remove('main-navigation--nojs');

const closeMenu = () => {
  navMain.classList.remove('main-navigation--is-open');
  navMain.classList.add('main-navigation--is-close');
  body.style.overflowY = 'unset';
  overlay.style.display = "none";
};

const openMenu = () => {
  navMain.classList.add('main-navigation--is-open');
  navMain.classList.remove('main-navigation--is-close');
  body.style.overflowY = 'hidden';
  overlay.style.display = "block";
};

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener ('click', function() {
  closeMenu();
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    closeMenu();
  })
}

