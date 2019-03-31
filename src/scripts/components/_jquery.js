import $ from 'jquery';

$.fn.extend({
  forEach: function (callback) {
    return this.each((index) => callback($(this[index]), index, this));
  },
  clickOutside: function (selector, callback) {
    return $(document).click(function (event) {
      if (!$(event.target).is(selector + ', ' + selector + ' *')) {
        callback(event);
      }
    })
  },
  keyDownSwitch: function (keyCode, callback) {
    return this.keydown((event) => {
      if (event.keyCode == keyCode || event.charCode == keyCode || event.which == keyCode) {
        callback(event);
      }
    })
  }
});

export default $;