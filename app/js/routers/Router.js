this.define([
    'marionette'
],

function(Marionette){
	'use strict';
    return Marionette.AppRouter.extend({

        // Format is "route": "methodName" where the router's controller
        // must have the method methodName
        appRoutes: {
        	'/': 'feed'
        },

        // Standard backbone routes. Methods called must be in this object.
        routes: {},

    });

});