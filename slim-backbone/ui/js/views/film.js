// Filename: views/projects/list
define(['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/film/item.html'
	], function($, _, Backbone, Handlebars, filmItem){
		var filmView = Backbone.View.extend({
			tagName: 'li',
			attributes: function () {
				if (!!this.model) {
					return { 'data-film_id' : this.model.id };
				}
			},
			template: Handlebars.compile(filmItem),
			render: function(eventName) {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});
	
		return filmView;
	}
);
