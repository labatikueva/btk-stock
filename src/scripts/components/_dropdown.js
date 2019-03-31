import $ from 'jquery';

const KEY_DOWN = 27;

const DROPDOWN_OPEN_CLASS = 'btk-dropdown-open';

class Dropdown {

  constructor($dropdown, index) {
    this.index = index;
    this.$dropdown = $dropdown;
    this.$dropdownMenu = $dropdown.children('.btk-dropdown-menu');
    this.$dropdownToggle = $dropdown.children('.btk-dropdown-toggle');
    this.setEvents();
  }

  setEvents() {
    $(document).keyDownSwitch(KEY_DOWN, this.close.bind(this));
    this.$dropdownToggle.click(this.toggleClick.bind(this));
    this.$dropdownMenu.click(this.close.bind(this));
    this.$dropdown.clickOutside(Dropdown.selector, this.close.bind(this));
  }

  toggleClick() {
    this.$dropdown.toggleClass(DROPDOWN_OPEN_CLASS);
  }

  close() {
    this.$dropdown.removeClass(DROPDOWN_OPEN_CLASS);
  }

  static from($dropdown, index) {
    return new Dropdown($dropdown, index);
  }

  static get selector() {
    return '.btk-dropdown';
  }
}

$(Dropdown.selector).forEach(Dropdown.from);

export default Dropdown;