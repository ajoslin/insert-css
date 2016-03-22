var inserted = {}

module.exports = function (css, options) {
  var id = options && options.id || css
  var elem = inserted[id] = (inserted[id] || document.createElement('style'))

  elem.setAttribute('type', 'text/css');

  if ('textContent' in elem) {
    elem.textContent = css;
  } else {
    elem.styleSheet.cssText = css;
  }

  if (elem.parentNode) return

  var head = document.getElementsByTagName('head')[0];
  if (options && options.prepend) {
    head.insertBefore(elem, head.childNodes[0]);
  } else {
    head.appendChild(elem);
  }
}
