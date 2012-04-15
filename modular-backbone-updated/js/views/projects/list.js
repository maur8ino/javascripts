// Filename: views/projects/list
define([
	'jquery',
	'underscore',
	'backbone',
	'mustache',
	// Pull in the Collection module from above
	'collections/projects',
	'text!templates/projects/list.html'

	], function($, _, Backbone, Mustache, projectsCollection, projectListTemplate){
		var projectListView = Backbone.View.extend({
			el: $("#page"),
		initialize: function(){
			this.collection = projectsCollection;
			this.collection = projectsCollection.add({ name: "Twitter"});
			this.collection = projectsCollection.add({ name: "Facebook"});
			this.collection = projectsCollection.add({ name: "Myspace", score: 20});
		},
		render: function(){
			var data = {
				projects: this.collection.toJSON()
			};
			this.$el.html(Mustache.render(projectListTemplate, data));
		}
	});
	return new projectListView();
});
