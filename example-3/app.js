var orderFormApp = angular.module('orderFormApp', ['ngRoute']);

orderFormApp.config(function($routeProvider) {
  $routeProvider.
    when('/checkout/shipping', {
      templateUrl: 'shipping.html',
      controller: 'ShippingController',
      activeTab: 'shipping'
    }).
    when('/checkout/payment', {
      templateUrl: 'payment.html',
      controller: 'PaymentController',
      activeTab: 'payment'
    }).
    when('/checkout/confirm', {
      templateUrl: 'confirm.html',
      controller: 'ConfirmationController',
      activeTab: 'confirm'
    }).
    otherwise({
      redirectTo: '/checkout/shipping'
    });
});

orderFormApp.controller('ShippingController', function($rootScope, $route) {
  $rootScope.activeTab = $route.current.activeTab;
  // Shipping form logic...
});

orderFormApp.controller('PaymentController', function($rootScope, $route) {
  $rootScope.activeTab = $route.current.activeTab;
  // Payment form logic...
});

orderFormApp.controller('ConfirmationController', function($rootScope, $route) {
  $rootScope.activeTab = $route.current.activeTab;
  // Confirmation form logic...
});
