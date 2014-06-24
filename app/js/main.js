this.require([
    'jquery',
    'backbone',
    'app',
    'routers/Router',
    'controllers/FeedController'
],
function($, Backbone, App, Router, FeedController){
    'use strict';

    var global = window || this,
        $doc = $(global.document),
        loc = global.location;

    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    // $(document).foundation();

    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    App.start();

    new Router({
        controller: FeedController
    });

    // Trigger the initial route and enable HTML5 History API support
    Backbone.history.start({
        pushState: true,
        root: App.root
    });

    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $doc.on({
        'click a:not([data-bypass])': function(e){
            // Get the absolute anchor href.
            var href = {
                    prop: $(this).prop('href'),
                    attr: $(this).attr('href')
                },
                root = loc.protocol + '//' + loc.host + App.root;
            // Ensure the root is part of the anchor href, meaning it's relative.
            if (href.prop && href.prop.slice(0, root.length) === root) {
                e.preventDefault();
                Backbone.history.navigate(href.attr, true);
            }
        },
        'click a[data-bypass]': function(e){
            e.preventDefault();
        }
    });
});
