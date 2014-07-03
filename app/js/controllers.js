'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller("ProfileCtrl", function($scope, $http) {
    $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
    var url = "http://membernet/api/get/profile";
    $http.get(url).
    success(function(data, status, headers, config) {
      console.debug(data, headers);
      $scope.url = url; 
      $scope.from_membernet = JSON.stringify(data);
    })
  })
  .controller('ActivitiesCtrl', ['$scope', function($scope) {

  }])
  .controller('InvoicesCtrl', ['$scope', function($scope) {

  }]);