"use strict";

var _modals = _interopRequireDefault(require("./modules/modals"));

var _sliders = _interopRequireDefault(require("./modules/sliders"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _mask = _interopRequireDefault(require("./modules/mask"));

var _checkTextInputs = _interopRequireDefault(require("./modules/checkTextInputs"));

var _showMoreStyles = _interopRequireDefault(require("./modules/showMoreStyles"));

var _calc = _interopRequireDefault(require("./modules/calc"));

var _filter = _interopRequireDefault(require("./modules/filter"));

var _pictureSize = _interopRequireDefault(require("./modules/pictureSize"));

var _accordeon = _interopRequireDefault(require("./modules/accordeon"));

var _burger = _interopRequireDefault(require("./modules/burger"));

var _scrolling = _interopRequireDefault(require("./modules/scrolling"));

var _drop = _interopRequireDefault(require("./modules/drop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  (0, _modals["default"])();
  (0, _sliders["default"])('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
  (0, _sliders["default"])('.main-slider-item', 'vertical');
  (0, _forms["default"])();
  (0, _mask["default"])('[name="phone"]');
  (0, _checkTextInputs["default"])('[name="name"]');
  (0, _checkTextInputs["default"])('[name="message"]');
  (0, _showMoreStyles["default"])('.button-styles', '#styles .row');
  (0, _calc["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  (0, _filter["default"])();
  (0, _pictureSize["default"])('.sizes-block');
  (0, _accordeon["default"])('.accordion-heading');
  (0, _burger["default"])('.burger-menu', '.hamburger');
  (0, _scrolling["default"])('.pageup');
  (0, _drop["default"])();
});