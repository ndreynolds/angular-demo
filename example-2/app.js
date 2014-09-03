var exampleApp = angular.module('exampleApp', []);

exampleApp.controller('CountriesController', function($scope) {
  $scope.countries = window.COUNTRIES;
});
