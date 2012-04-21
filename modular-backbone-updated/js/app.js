// Filename: app.js
define([
  'jquery',
  'jquerymobile',
  'underscore',
  'backbone',
  'router' // Request router.js
], function($, jQm, _, Backbone, Router){

  $.mobile.hashListeningEnabled = false;
  $.mobile.pushStateEnabled = false;
  $.mobile.linkBindingEnabled = false;

  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();
  };

  return {
    initialize: initialize
  };
});
