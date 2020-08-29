"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var burger = function burger(menuSelector, burgerSelector) {
  var menuElem = document.querySelector(menuSelector),
      burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', function () {
    if (menuElem.style.display == "none" && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
      burgerElem.classList.add('is-active');
    } else {
      menuElem.style.display = 'none';
      burgerElem.classList.remove('is-active');
    }
  });
  window.addEventListener('resize', function () {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
      burgerElem.classList.remove('is-active');
    }
  });
};

var _default = burger;
exports["default"] = _default;