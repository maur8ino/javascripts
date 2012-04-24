define([
	'jquery',
	'underscore',
	'backbone',
	'models/film'
], function($, _, Backbone, filmModel){
	
	var filmCollection = Backbone.Collection.extend({
		model: filmModel,
		url: "../api/films",
		parse: function(resp, xhr) {
			return _.map(resp.films, function(film) {
				return _.extend(film, { id: film.film_id });
			});
		}
	});

	return filmCollection;
});


