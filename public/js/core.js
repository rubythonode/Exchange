var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/",{
        templateUrl : "main.html",
        controller : "mainController"
    })
    .when("/add", {
        templateUrl : "add.html",
        controller : "mainController"
    })
     .when("/checkout", {
        templateUrl : "checkout.html",
        controller : "checkController"
    })
   .otherwise({
        template : "<h1>None</h1><p>Nothing has been selected,</p>"
    });

  //$locationProvider.html5Mode(true);
})