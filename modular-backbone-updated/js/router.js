// Filename: router.js
define([
	'jquery',
	'jquerymobile',
	'underscore',
	'backbone',
	'views/home/main',
	'views/projects/list',
	'views/users/list'
	], function($, jQm, _, Backbone, mainHomeView, projectListView, userListView ){
		var AppRouter = Backbone.Router.extend({
			routes: {
			// Define some URL routes
			'projects': 'showProjects',
			'users': 'showUsers',

			// Default
			'*actions': 'defaultAction'
		},
		showProjects: function(){
			// Call render on the module we loaded in via the dependency array
			// 'views/projects/list'
			projectListView.render();
		},
			// As above, call render on our loaded module
			// 'views/users/list'
			showUsers: function(){
				userListView.render();
			},
			defaultAction: function(actions){
			// We have no matching route, lets display the home page
			mainHomeView.render();
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		Backbone.history.start();
	};

	$('#menu').on('click', 'a', function() {
		var url = $(this).attr('href');
		if (url.indexOf('#') > 0) {
			var effect = 'slideup',
				reverse = false,
				changeHash = false;

			$.mobile.changePage( url , { transition: effect}, reverse, changeHash );
		}
	});
	return {
		initialize: initialize
	};
});
