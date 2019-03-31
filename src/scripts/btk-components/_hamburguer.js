import $ from 'jquery';

const KEY_DOWN = 27;

const HAMBURGER_OPEN = 'btk-hamburguer-open';

class Hamburguer {
  constructor() {
    this.$body = $('body');
    this.$navbar = $('.btk-navbar');
    this.$profile = $('.btk-profile');
    this.$humburguer = $('.btk-hamburguer');
    this.setEvents();
  }

  setEvents() {
    $(document).keyDownSwitch(KEY_DOWN, this.close.bind(this));

    this.$humburguer.click(this.toggleHamburguer.bind(this));
    this.$navbar.click(this.showHamburgerIfNeeded.bind(this));
    this.$profile.resize(this.toggleDropdownStyles.bind(this));

  }

  toggleDropdownStyles() {
    if (this.$hamburguer.is(':visible')) {
      this.$profile.removeClass('btk-dropdown');
    } else {
      this.$profile.addClass('btk-dropdown');
    }
  }

  showHamburgerIfNeeded() {
    if (this.$body.hasClass(HAMBURGER_OPEN)) {
      this.close();
    }
  }

  close() {
    this.$body.removeClass(HAMBURGER_OPEN);
  }

  toggleHamburguer() {
    $('body').toggleClass(HAMBURGER_OPEN);
  }
}

export default new Hamburguer();