function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function createElement(tag, className) {
  var el = document.createElement(tag);
  el.className = className;
  return el;
}
