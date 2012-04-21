// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		jquerymobile: 'libs/jquery-mobile/jquery.mobile-1.1.0',
		underscore: 'libs/underscore/underscore-amd',
		backbone: 'libs/backbone/backbone-amd',
		mustache: 'libs/mustache/mustache-wrap',
		text: 'libs/require/text',
		order: 'libs/require/order',
		templates: '../templates'
	}

});

require([

	// Load our app module and pass it to our definition function
	'app'

	// Some plugins have to be loaded in order due to their non AMD compliance
	// Because these scripts are not "modules" they do not pass any values to the definition function below
], function(App){
	// The "app" dependency is passed in as "App"
	// Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
	App.initialize();
});
