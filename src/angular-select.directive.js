angular.module('ngSelect',[])
.directive('mySelect',function(){
	return {
        restrict: 'E',
        replace: true,
        templateUrl: 'select.html',
        scope:{
        	selectData:'=',
        	selectChange:'&'
        	
        },
        controller:function(){

        }
    };
})
.directive('editSelect',function($timeout){
	return {
        restrict: 'E',
        replace: true,
        templateUrl: 'editSelect.html',
        scope:{
        	selectData:'=',
        	selectChange:'&',
        	backData:'='
        },
        link:function(scope){
        	// console.log(arguments);
        	scope.select={};
        	$timeout(function(){

				scope.select.province=scope.backData.province.id.toString();
				scope.select.city=scope.backData.city.id.toString();
        		scope.select.county=scope.backData.county.id.toString();
        	})
        	
        }
    };
})