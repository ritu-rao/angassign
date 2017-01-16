var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/Assignment1", {
        templateUrl : "Assignment1.html",
        controller : 'myCtrl'
    })


     .when("/Assignment2", {
        templateUrl : "Assignment2.html",
        controller : 'ComputeController'
    })


     .when("/Assignment3", {
       templateUrl : "Assignment3.html",
       controller : "workCtrl"
     })


    .when("/Assignment4", {
        templateUrl : "Assignment4.html",
        controller : "userController"
 })


     .when("/Assignment5", {
         templateUrl : "Assignment5.html",
         controller :"infoCtrl"
     })


    .when("/Assignment6", {
       templateUrl : "Assignment6.html",
       controller:"shopctrl"
 })
    
});
