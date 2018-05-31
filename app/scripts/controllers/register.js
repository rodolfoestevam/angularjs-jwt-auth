'use strict';

/**
 * @ngdoc function
 * @name angularjsJwtAuthApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the angularjsJwtAuthApp
 */
angular.module('angularjsJwtAuthApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.submit = function () {
      console.log("test");
    }
  });
