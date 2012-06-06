// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	paths: {
		jquery: 'libs/jquery/jquery-min',
		ember: 'libs/ember/ember-0.9.8.1',
		text: 'libs/require/text',
		templates: '../templates'
	}

});

require(['app'], function(App){
	App.initialize();
});
