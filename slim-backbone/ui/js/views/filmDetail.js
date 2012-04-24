// Filename: views/projects/list
define(['jquery', 'underscore', 'backbone', 'mustache', 'text!templates/film/detail.html'],
	function($, _, Backbone, Mustache, filmDetail){
		var filmDetailsView = Backbone.View.extend({
			tagName: 'div',
			render: function(eventName) {
				this.$el.html(Mustache.render(filmDetail, this.model.toJSON()));
				return this;
			}
		});
		
		return filmDetailsView;
	}
);
