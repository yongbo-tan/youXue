'use strict';

var app = angular.module("routeApp", []);

app.controller("routeCtrl", function($http, $scope) {
    $http.get('routes.json')
        .then(function (response) {
            $scope.routes = response.data;
        });
    $scope.name = "没有选择任何路线";
    $scope.getName = function (name) {
        $scope.name = name;
    }
});
