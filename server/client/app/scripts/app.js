'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {


    RestangularProvider.setBaseUrl('http://localhost:4321');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/locationpicker', {
        templateUrl: 'views/locationpicker.html',
        controller: 'LocationpickerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('LocationPickerRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('LocationPicker', function(LocationPickerRestangular) {
  return LocationPickerRestangular.service('locationpicker');
})
