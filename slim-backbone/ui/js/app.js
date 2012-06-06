// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		ember: 'libs/ember/ember-0.9.8.1',
		ember_resource: 'libs/ember/ember-resource',
		text: 'libs/require/text',
		templates: '../templates'
	}

});

// Filename: app.js
define('app', ['jquery', 'collections/films', 'ember', 'ember_resource'],
	function($, filmCollection) {

		var App = Ember.Application.create({
			VERSION: '0.2-omfg'
		});

		App.film = Ember.Resource.define({
			url: '/api/films',
			schema: {
				film_id: Number,
				title: String,
				description: String,
				release_year: String,
				language_id: Number
			}
		});

		App.filmsController = Ember.ResourceCollection.create({
			type: App.film
		});
	});
