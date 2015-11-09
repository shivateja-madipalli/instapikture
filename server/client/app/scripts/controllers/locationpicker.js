'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LocationpickerCtrl
 * @description
 * # LocationpickerCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LocationpickerCtrl', function ($scope,LocationPicker) {
    $scope.awesomeThings = [
      {
        'name' : 'Xbox',
        'clearance' : true,
        'price' : 49.99,
  	}];
  });
