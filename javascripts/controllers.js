'use strict'
app.controller("movieSearchCtrl", function($scope, $http) {
 $scope.userInput = '';
 $scope.movies = [];

 $scope.search = function() {
 	console.log("hey");
 	console.log($scope.userInput);

 	$http({
 		method: 'GET',
 		url: `http://www.omdbapi.com/?s=${$scope.userInput}`
 	}).then((response) => {
 		console.log(response.data.Search)
 		$scope.movies = response.data.Search
 		console.log($scope.movies)


 	// }).then( ()=> {
 	// 	$http({
 	// 		method: 'post',
 	// 		url: 'https://moviehistorypod.firebaseio.com/.json',
 	// 		data: $scope.movie
 	// 	})
 	})
 }

})