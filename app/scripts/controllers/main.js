'use strict';

/**
 * @ngdoc function
 * @name angularStackOfTroubleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularStackOfTroubleApp
 */
angular.module('angularStackOfTroubleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.storyElements = [
      { text: 'HTML5 Boilerplate'},
      { text: 'AngularJS'},
      { text: 'Karma'}
    ];
    $scope.addStoryElement = function () {
      var storyElement = {text: $scope.storyElement}
      $scope.storyElements.push(storyElement);
      $scope.storyElement = '';
    };
  });
