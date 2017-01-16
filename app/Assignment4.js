 var mainApp = angular.module("myApp");
         
         mainApp.controller('userController', function($scope) {
            $scope.user = {
               firstName: "Ritu",
               lastName: "Rao",
               amount:1000,
               fullName: function() {
                  var userObj;
                  userObj = $scope.user;
                  return userObj.firstName + " " + userObj.lastName;
               }
            };
         });