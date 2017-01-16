angular.module('myApp').controller('workCtrl', function($scope) {
    $scope.details = [
        {id:1,name:'Ritu',technology:"GitHub"},
			{id:2,name:'Shivani',technology:"Angular1"},
				{id:3,name:'Neelam',technology:"Angular2"},
					{id:4,name:'Aslam',technology:"C#"},
						{id:5, name:'Riddhima',technology:".Net"},
							{id:6,name:'Arati',technology:"HTML"}
								
        
        
        ];
    $scope.orderByMe = function(detail) {
        $scope.myOrderBy = detail;
    }
});