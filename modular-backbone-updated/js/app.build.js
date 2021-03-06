({
    dir: "../build",
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
    },
    optimize: "uglify",
    modules: [
        {
            name: "app",
            exclude: [
                // If you prefer not to include certain libs exclude them here
            ]
        }
    ]
})