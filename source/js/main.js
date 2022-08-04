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

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call(document.getElementsByName('phone'), function(input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function(a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });
});




const consult = document.body.querySelector('.intro .btn');
const goodsTitle = document.body.querySelector('.goods h2');

var accordionItem = document.querySelectorAll('.accordion-title'),
  bodyItems = document.querySelectorAll('.accordion-body');
accordionItem.__proto__.forEach = [].__proto__.forEach;

if (window.outerWidth < 770) {
  consult.innerText = 'бесплатная консультация';
  goodsTitle.innerText = 'Товары и услуги Smart Device';

  bodyItems.forEach(function(item, i, accordionItem) {
    item.classList.remove('no-js');
  });

  var activeAccordion;
  accordionItem.forEach(function(item, i, accordionItem) {
    item.addEventListener('click', function(e) {
      this.classList.add('accordion-active');
      this.nextElementSibling.classList.add('active');
      if (activeAccordion) {
        activeAccordion.classList.remove('accordion-active');
        activeAccordion.nextElementSibling.classList.remove('active');
      }
      activeAccordion = (activeAccordion === this) ? 0 : this;
    });
  });

} else {
  consult.innerText = 'получить бесплатную консультацию';
  goodsTitle.innerText = 'Smart Device предлагает следующие товары и услуги';
}


var textDesktop = document.getElementById("textDesktop");
var textMobile = document.getElementById("textMobile");
var buttonText = document.getElementById("textButton");

if (buttonText.innerText.toLowerCase() === 'подробнее') {
  textDesktop.style.display = "none";
}

if ((window.outerWidth < 770) && (buttonText.innerText.toLowerCase() === 'подробнее')) {
  textMobile.style.display = "none";
}

buttonText.addEventListener('click', function() {
  if (buttonText.innerText.toLowerCase() === 'подробнее') {
    buttonText.innerText = 'Свернуть';
    if (window.outerWidth < 770) {
      textMobile.style.display = "inline";
      textDesktop.style.display = "inline";
    }
    else {
      textDesktop.style.display = "inline";
    }
  } else {
    buttonText.innerText = 'Подробнее';
    if (window.outerWidth < 770) {
      textMobile.style.display = "none";
      textDesktop.style.display = "none";
    }
    else {
      textDesktop.style.display = "none";
    }
  }
});
