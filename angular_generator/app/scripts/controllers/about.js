'use strict';

/**
 * @ngdoc function
 * @name invoiceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoiceApp
 */
angular.module('invoiceApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
