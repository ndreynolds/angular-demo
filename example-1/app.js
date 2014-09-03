var exampleApp = angular.module('exampleApp', []);

exampleApp.controller('ColorController', function($scope) {
  var defaultColor = '#cccccc';
  $scope.color = defaultColor;

  $scope.reset = function() {
    $scope.color = defaultColor;
  };
});
