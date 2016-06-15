(function() {
  'use strict';

  angular
    .module('myApp')
    .factory('dataService', dataService);

  function dataService($http, $q) {
    let cartArray = [];
    let qtyArray = [];
    let orderTotal;
    let data;

    return {
      getData: function() {
        return $http.get('/services/dataService.json').then(function(data) {
          return data
        })
      },

      getCart: function() {
        return cartArray;
      },

      addToCart: function(tea, amount) {
        if(cartArray.indexOf(tea) < 0) {
          tea.qty = amount;
          cartArray.push(tea);
        } else {
          tea.qty+= amount
        }
      },

      addQty: function() {
        for (var i = 1; i <= 10; i++) {
          qtyArray.push(i);
        }
        return qtyArray
      },

      cartQty: function() {
        return cartArray.length;
      },

      orderTotal: function() {
        orderTotal = 0;
        for (var i = 0; i < cartArray.length; i++) {
          orderTotal += cartArray[i].price * cartArray[i].qty;
        }
        return orderTotal;
      },

      RemoveItem: function (item) {
        cartArray.splice(cartArray.indexOf(item), 1);
      }
    }
  }
})()
