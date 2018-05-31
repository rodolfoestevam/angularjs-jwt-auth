'use strict';

/**
 * @ngdoc directive
 * @name angularjsJwtAuthApp.directive:validateEquals
 * @description
 * # validateEquals
 */
angular.module('angularjsJwtAuthApp').directive('validateEquals', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModelCtrl) {
      function validateEqual(value) {
        var valid = (value === scope.$eval(attrs.validateEquals));
        ngModelCtrl.$setValidity('equal', valid);
        return valid ? value : undefined
      }

      ngModelCtrl.$render(validateEqual);
      ngModelCtrl.$render(validateEqual);

      scope.$watch(attrs.validateEquals, function () {
        ngModelCtrl = ngModelCtrl;
      })
    }
  };
});
