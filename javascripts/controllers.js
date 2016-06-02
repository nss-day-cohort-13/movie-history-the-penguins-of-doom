'use strict'
app.controller("movieSearchCtrl", function($scope, $http) {
 $scope.userInput = '';


 $scope.search = function() {
 	console.log("hey");
 	console.log($scope.userInput);

 	$http({
 		method: 'GET',
 		url: `http://www.omdbapi.com/?t=${$scope.userInput}&y=&plot=short&r=json`
 	}).then((response) => {
 		console.log(response.data)
 		$scope.movie = response.data
 		console.log($scope.movie)


 	}).then( ()=> {
 		$http({
 			method: 'post',
 			url: 'https://moviehistorypod.firebaseio.com/.json',
 			data: $scope.movie
 		})
 	})
 }

})