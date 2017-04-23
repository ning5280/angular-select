angular.module('myApp',['ngSelect'])
.controller('select',['$scope','$http',function($scope,$http){
	// $scope.firstData = [];/
	//准备回填的数据
	$scope.backData={
		"province":{id:2,name:'山东省',pid:0},
		"city":{id:9,name:'潍坊市',pid:1},
		"county":{id:111,name:'寿光市',pid:9} // 此处不再特殊举例
	}
	// 初始化省市县数据
	$scope.selectData ={
		"province":[],
		"city":[],
		"county":[]
	};

	// 根据以上例子分析 如果全部回填 我们需要拿到所有的省，山东省下面所有的市，以及潍坊下面所有的县区
	//已下面三个http请求来实现模拟数据
	$http({
		url:'province.json',
		method:'get',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
	}).then(function(answer){
		console.log(answer);
		$scope.selectData.province = answer.data.dataResult;

	})

	$http({
		url:'city.json',
		method:'get',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
	}).then(function(answer){
		console.log(answer);
		$scope.selectData.city = answer.data.dataResult;

	})

	$http({
		url:'county.json',
		method:'get',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
	}).then(function(answer){
		console.log(answer);
		$scope.selectData.county = answer.data.dataResult;

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