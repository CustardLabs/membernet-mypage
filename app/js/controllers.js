'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller("ProfileCtrl", function($scope, $http) {
    $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
    var url = "http://route.scoutnet.c.bitbit.net/test/demo/api/get/profile";
    $http.get(url).
    success(function(data, status, headers, config) {
      console.debug(data, headers);
      $scope.url = url; 
      $scope.from_membernet = JSON.stringify(data);
    });
  })
  .controller('ActivitiesCtrl', ['$scope', function($scope) {

  }])
  .controller('InvoicesCtrl', ['$scope', function($scope) {

  }])
  .controller("NavCtrl", ["$scope", "$location", function($scope, $location) {
    $scope.items = [
      {path: "/profile", title: "Profile"},
      {path: "/activities", title: "Activities"},
      {path: "/invoices", title: "Invoices"}
    ];
    $scope.isActive = function(item) {
      if (item.path === $location.path()) { return true; } else { return false; };
    };

  }])
  .controller('LoginCtrl', ["$scope", "$http", "$window", function ($scope, $http, $window) {
    $scope.user = {username: 'john.doe', password: 'foobar'};
    $scope.message = '';
    $scope.submit = function () {
      $http
        .post('http://route.scoutnet.c.bitbit.net/test/demo/api/authenticate', $scope.user)
        .success(function (data, status, headers, config) {
          $window.sessionStorage.token = data.token;
          $scope.message = 'Welcome';
        })
        .error(function (data, status, headers, config) {
          // Erase the token if the user fails to log in
          delete $window.sessionStorage.token;

          // Handle login errors here
          $scope.message = 'Error: Invalid user or password';
        });
    };
  }]);