(function() {
  'use strict';

  angular
    .module('myApp', ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        templateUrl: 'landing/landing.html',
        controller: 'landingController',
        controllerAs: 'view'
      }).when('/checkout', {
        templateUrl: 'checkout/checkoutPartial.html',
        controller: 'checkoutController',
        controllerAs: 'vm'
      })
      $locationProvider.html5Mode(true)
    })
})();
