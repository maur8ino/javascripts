// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		jquery_scrollto: 'libs/jquery/plugins/jquery.scrollTo-1.4.2',
		underscore: 'libs/underscore/underscore-amd',
		backbone: 'libs/backbone/backbone-amd',
		handlebars: 'libs/handlebars/handlebars-1.0.0.beta.6-amd',
		text: 'libs/require/text',
		order: 'libs/require/order',
		templates: '../templates'
	}

});

require(['app'], function(App){
	App.initialize();
});
