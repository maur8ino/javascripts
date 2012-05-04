// Filename: views/projects/list
define(['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/film/detail.html'],
	function($, _, Backbone, Handlebars, filmDetail){
		var filmDetailsView = Backbone.View.extend({
			tagName: 'div',
			template: Handlebars.compile(filmDetail),
			render: function(eventName) {
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});
		
		return filmDetailsView;
	}
);
