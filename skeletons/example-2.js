var countriesApp = angular.module('countriesApp', []);

countriesApp.controller('CountriesController', function($scope) {
  $scope.countries = window.COUNTRIES;
  $scope.continents = window.CONTINENT_OPTIONS;
  $scope.continent = 'all';
});

countriesApp.filter('populationBetween', function() {
  return function(items, min, max) {
    min = min || 0;
    max = max || Infinity;
    return items.filter(function(item) {
      return item.population >= min && item.population <= max;
    });
  };
});

countriesApp.filter('inContinent', function() {
  return function(items, continent) {
    if (continent === 'all') return items;
    return items.filter(function(item) {
      return item.continentName === continent;
    });
  };
});
