angular
  .module('btk')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state({
        name: 'home',
        url: '/',
        template: ''
      })
      .state({
        name: 'productos',
        url: '/productos',
        component: 'productos',
      });
  }]);