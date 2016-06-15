(function() {
  'use strict';

  angular
    .module('myApp')
    .directive('caffeineMeter', caffeineMeter);

  function caffeineMeter() {
    return {
      scope: {
        caffeineScale: '=caffeinemg'
      },
    templateUrl: 'landing/template.html'
    }
  }
})()
