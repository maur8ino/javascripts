
angular.module('films', [])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/films', { templateUrl: 'partials/film-list.html', controller: FilmList })
			.when('/films/:filmId', { templateUrl: 'partials/film-detail.html', controller: FilmDetail })
			.otherwise({ redirectTo: '/films' });
	}]);
