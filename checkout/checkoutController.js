(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('checkoutController', checkoutController);

  function checkoutController(dataService) {
    let vm = this;

    vm.cart = dataService.getCart();

    vm.orderTotal = dataService.orderTotal()

    vm.RemoveItem = function(item) {
      dataService.RemoveItem(item);
      vm.orderTotal = dataService.orderTotal();
    }

    vm.save = function(item) {
      item.editToggle = false;
      vm.orderTotal = dataService.orderTotal();
    }

    vm.editToggle = function(item) {
      item.editToggle = !item.editToggle
    }
  }
})()
