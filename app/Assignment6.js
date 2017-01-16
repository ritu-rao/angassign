

var app = angular.module('myapp');
app.controller('shopctrl', ['$scope', bill]);

function bill($scope) {
    $scope.items = [{
        select:false,

        name: 'Tshirts',
        quantity: 1,
        price: 100
    },
    
     {
        select:false,

        name: 'Trousers',
        quantity: 2,
        price: 5000
    },
    
     {
        select:false,

        name: 'blush',
        quantity: 1,
        price: 900
    }];
    
    $scope.billCount = 0;
    $scope.billTotal = 0;
    
    $scope.setTotals = function(product){
       
        if (product.select){
            product.total = product.quantity * product.price;
            $scope.billCount += product.quantity;
            $scope.billTotal += product.total;
        }
      
        
    }
  
}

