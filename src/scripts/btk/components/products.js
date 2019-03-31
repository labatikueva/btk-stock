
angular
  .module('btk')
  .component('productsList', {
    templateUrl: 'views/products-list.html',
    controller: function () {
      this.products = [
        { name: 'Coca' },
        { name: 'Alfajor' },
        { name: 'Carta' }
      ]
    }
  })