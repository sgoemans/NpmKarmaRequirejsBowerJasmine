/**
 * Created by goemans.stephan on 01.08.2014.
 */
define(["backbone"], function(Backbone) {
    return Backbone.Model.extend({
        defaults: {
            title: '',
            text: '*Edit your note*',
            createdAt: new Date()
        },
        validate: function (attr, options) {
            "use strict";
            if (attr.text == '') {
                return 'Text must not be empty';
            }
        }
    });
});
