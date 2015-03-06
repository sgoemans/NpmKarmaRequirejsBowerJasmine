/**
 * Created by Test on 05.03.2015.
 */
requirejs.config({
    urlArgs: 'bustCache=' + (new Date()).getTime(),

    paths: {
        'jquery': '../node_modules/jquery/dist/jquery',
        'underscore': '../node_modules/underscore/underscore',
        'backbone': '../node_modules/backbone/backbone',
        'backbone.localstorage': '../node_modules/backbone.localstorage/backbone.localStorage',
        'namespace' : 'js/namespace',
        'notemodel' : 'js/models/note',
        'notecollection' : 'js/collections/notes',
        'notenav' : 'js/views/noteNav'
    },

    callback: function () {
        "use strict";

        require(["js/app"], function (App) {
            var app = new App();
            app.start();
        });
    }
});
