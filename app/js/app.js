'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileCtrl'});
  $routeProvider.when('/activities', {templateUrl: 'partials/activities.html', controller: 'ActivitiesCtrl'});
  $routeProvider.when('/invoices', {templateUrl: 'partials/invoices.html', controller: 'InvoicesCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]).
config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);