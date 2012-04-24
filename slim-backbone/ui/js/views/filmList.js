// Filename: views/projects/list
define(['jquery', 'underscore', 'backbone', 'views/film'],
	function($, _, Backbone, filmView){
		var filmListView = Backbone.View.extend({
			tagName: 'ul',
			className: 'test',
			initialize: function() {
				if (!!this.model) {
					this.model.bind("reset", this.render, this);
				}
			},
			render: function(eventName) {
				this.$el.html('');
				_.each(this.model.models, function (film) {
					this.$el.append(new filmView({model: film}).render().el);
				}, this);
				return this;
			}

		});
	
		return filmListView;
	}
);
