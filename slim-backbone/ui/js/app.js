// Filename: app.js
define(['jquery', 'ember'],
	function($, Ember) {

/*	var initialize = function(){
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	};

	return {
		initialize: initialize
	};
*/
	var App = Em.Application.create({
		VERSION: '0.2-omfg'
	});

	return { initialize: function() {
		window.App = App;
	}};
});
