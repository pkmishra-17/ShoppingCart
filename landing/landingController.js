(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('landingController', landingController);

  function landingController(dataService, $location) {
    let view = this;
    view.categoriesArray = [];
    view.total = 0;
    view.selectCategory = '';

    view.addQty = dataService.addQty();

    view.addToCart = function(tea, amount) {
      amount = amount || 1;
      dataService.addToCart(tea, amount);
      view.total = dataService.cartQty();
    }

    view.filterStuff = function(tea) {
      if (view.selectCategory) {
        if (tea.categories.indexOf(view.selectCategory) > -1) {
          return true;
        } return false
        } else {
          return true
        }
      }

    view.checkout = function() {
      $location.path('/checkout');
    }

    dataService.getData().then(data => {
      view.data = data.data;
      view.data.forEach(data => {
        data.categories.forEach(data => {
          view.categories = data.categories;
          view.categoriesArray.push(data)
        })
      });
      view.categories = Array.from(new Set(view.categoriesArray));
    })
  }
})();
