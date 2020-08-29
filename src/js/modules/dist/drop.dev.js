"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var drop = function drop() {
  var fileInputs = document.querySelectorAll('[name="upload"]');
  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(function (eventName) {
    fileInputs.forEach(function (input) {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.border = "5px solid yellow";
    item.closest('.file_upload').style.backgroundColor = "rgba(0,0,0,.7)";
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = "none";
    item.closest('.file_upload').style.backgroundColor = "#ededed";
  }

  ['dragenter', 'dragover'].forEach(function (eventName) {
    fileInputs.forEach(function (input) {
      input.addEventListener(eventName, function () {
        return highlight(input);
      }, false);
    });
  });
  ['dragleave', 'drop'].forEach(function (eventName) {
    fileInputs.forEach(function (input) {
      input.addEventListener(eventName, function () {
        return unhighlight(input);
      }, false);
    });
  });
  fileInputs.forEach(function (input) {
    input.addEventListener('drop', function (e) {
      input.files = e.dataTransfer.files;
      var dots;
      var arr = input.files[0].name.split('.');
      arr[0].length > 6 ? dots = "..." : dots = '.';
      var name = arr[0].substring(0, 6) + dots + arr[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

var _default = drop;
exports["default"] = _default;