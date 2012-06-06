define([
	'models/film',
	'ember'
], function(filmModel){
	
	var filmCollection = Ember.Object.create({
		films: [
			filmModel
		]
	});

	return filmCollection;
});


