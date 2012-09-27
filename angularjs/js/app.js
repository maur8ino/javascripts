'use strict';

/* Controllers */

function FilmList($scope, $http) {
	$http.get('/movies.api/films').success(function(data) {
		$scope.films = data.films;
	});
}

//PhoneListCtrl.$inject = ['$scope', '$http'];