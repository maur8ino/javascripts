// Filename: views/projects/list
define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	'text!templates/film/item.html'
	], function($, _, Backbone, Mustache, filmItem){
		var filmView = Backbone.View.extend({
			tagName: 'li',
			attributes: function () {
				if (!!this.model) {
					return { 'data-film_id' : this.model.id };
				}
			},
			render: function(eventName) {
				this.$el.html(Mustache.render(filmItem, this.model.toJSON()));
				return this;
			}
		});
	
		return filmView;
	}
);
