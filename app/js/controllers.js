'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  
  .controller("MemberProfileCtrl", function($scope, $http) {
    $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
    var url = "http://membernet/api/get/profile";
    $http.get(url).
    success(function(data, status, headers, config) {
      console.debug(data, headers);
      $scope.url = url; 
      $scope.from_membernet = JSON.stringify(data);
    });
  });