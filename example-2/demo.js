var countriesApp = angular.module('countriesApp', []);

countriesApp.controller('CountriesController', function($scope) {
  $scope.countries = window.COUNTRIES;
  $scope.continents = window.CONTINENT_OPTIONS;
});

countriesApp.filter('populationBetween', function() {
  return function(items, min, max) {
    // TODO
  };
});

countriesApp.filter('inContinent', function() {
  return function(items, continent) {
    // TODO
  };
});
