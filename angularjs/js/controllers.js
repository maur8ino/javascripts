'use strict';

/* Controllers */

/* Controllers */
function FilmList($scope, $http) {
	$http.get('/movie.api/films').success(function(data) {
		$scope.films = data.films;
	});

	$scope.filterFunction = function(object) {
		return (!$scope.filmSearch || $scope.filmSearch === '' || object.title.toUpperCase().indexOf($scope.filmSearch.toUpperCase()) === 0);
	};
}

function FilmDetail($scope, $routeParams, $http) {
	$http.get('/movie.api/films/' + $routeParams.filmId).success(function(data) {
		$scope.film = data;
	});
}
