var app = angular.module('myApp');
app.controller('infoCtrl', function($scope) {
    $scope.master = {firstName: "Ritu", lastName: "Rao",email:"abc@gmail.com",tel:234567890,location:"Pune"};
    
	$scope.gender = [
    { genderName: 'Male'},
    { genderName: 'Female'},
    
  ];
	$scope.reset = function() {
        
			$scope.user = angular.copy($scope.master);
    };
	
	$scope.reset();
	
});