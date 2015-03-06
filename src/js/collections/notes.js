/**
 * Created by goemans.stephan on 01.08.2014.
 */
define(['backbone', 'backbone.localstorage','notemodel'], function(Backbone, Localstorage, Note) {
    return Backbone.Collection.extend({
        model: Note,
        localStorage: new Localstorage("notes")
    });
});
