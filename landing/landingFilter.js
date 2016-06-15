(function() {
  'use strict';

  angular
    .module('myApp')
    .filter({
      currencyFormat: [currencyFormat],
      instock: [instock],
    });

  function currencyFormat() {
    return function(money) {
      return (money * 0.01).toFixed(2)
    }
  }

  function instock() {
    return function(instock) {
      if (instock = true) {
        return instock = 'Yes'
      } else {
        return instock = 'No'
      }
    }
  }
})();
