'use strict';

/**
 * @ngdoc function
 * @name angularStackOfTroubleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStackOfTroubleApp
 */
angular.module('angularStackOfTroubleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
