angular.module('myApp',['ngSelect'])
.controller('select',['$scope','$http',function($scope,$http){
	// $scope.firstData = [];/
	// 初始化省市县数据
	$scope.selectData ={
		"province":[],
		"city":[],
		"county":[]
	};

	$http({
		url:'province.json',
		method:'get',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
	}).then(function(answer){
		console.log(answer);
		$scope.selectData.province = answer.data.dataResult;

	})


	$scope.change=function(id,type){
		console.log(id);
		console.log(type);
		// 根据id y与 type发送不同的参数  此处只是举例
		if(type=='province'){
			// 清空原始数据
			$scope.selectData.city = [];
			$scope.selectData.county = [];

			$http({
				url:'city.json',
				method:'get',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
			}).then(function(answer){
				$scope.selectData.city = answer.data.dataResult;
			})
		}
		
		if(type=="city"){
			// 清空原始数据
			$scope.selectData.county = [];

			$http({
				url:'county.json',
				method:'get',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
			}).then(function(answer){
				$scope.selectData.county = answer.data.dataResult;
			})
		}

	}
}])