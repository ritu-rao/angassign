var app = angular.module('myApp');

app.service('Calculator', function () {
    this.SQUARE= function (digit) { return digit*digit;};
	
	this.CUBE=function(digit){return digit*digit*digit;};
	
	this.FACTORIAL=function(digit){
		if (digit < 0) {
			return -1;
		}
		else if (digit == 0) {
			return 1;
		}
		else {
			return (digit * this.FACTORIAL(digit - 1));
		}
	}
});
app.controller('ComputeController', function ($scope, Calculator) {
    $scope.number=2;
    $scope.findSquare = function () {
        $scope.result = Calculator.SQUARE($scope.number);
    }
	$scope.findCube = function () {
        $scope.result = Calculator.CUBE($scope.number);
    }
	$scope.findFactorial = function () {
        $scope.result = Calculator.FACTORIAL($scope.number);
    }
});

