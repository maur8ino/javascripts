// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		jquerymobile: 'libs/jquery-mobile/jquery.mobile-1.1.0',
		jquerymobilerouter:  'libs/jquery-mobile/jquery.mobile.router',
		underscore: 'libs/underscore/underscore-amd',
		backbone: 'libs/backbone/backbone-amd',
		mustache: 'libs/mustache/mustache-wrap',
		text: 'libs/require/text',
		order: 'libs/require/order',
		templates: '../templates'
	}

});

require(['app'], function(App){
	App.initialize();
});
