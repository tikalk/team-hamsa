this.define([
	// 'underscore',
	// 'backbone',
    'marionette',
    'views/HeaderView',
],

function(Marionette, HeaderView) {
    'use strict';
    var App = new Marionette.Application();

    App.addInitializer(function(){
        this.root = '/';
    });
    App.addRegions({
        header: 'header',
        main: '#main',
        footer: 'footer'
    });
    App.addInitializer(function(){
        // console.log('hello from App', this);
        this.header.show(new HeaderView());
    });

    // Return the instantiated app (there should only be one)
    return App;

});
