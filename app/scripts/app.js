this.define([
    'underscore',
    'backbone',
    'marionette'
],

function(_, Backbone, Marionette){
    'use strict';
    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function(){
        this.root = '/';
    });

    // Add as many of these as you like
    App.addInitializer(function(){
        console.log('hello from App', this);
    });

    // Return the instantiated app (there should only be one)
    return App;

});