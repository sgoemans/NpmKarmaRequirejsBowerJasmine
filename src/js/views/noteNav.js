define(['backbone', 'jquery'], function(Backbone, $) {
    return Backbone.View.extend({
        el: "#note-nav",
        events: {
            "click .note-view": "clickView",
            "click .note-edit": "clickEdit",
            "click .note-delete": "clickDelete"
        },
        initialize: function () {
            // Defaults for nav.
            this.$("li").removeClass("active");
            // Update the navbar UI for view/edit (not delete).
            this.on({
                "nav:update:view": this.updateView,
                "nav:update:edit": this.updateEdit
            });
        },
        updateView: function () {
            this.$("li").not(".note-view").removeClass("active");
            this.$(".note-view").addClass("active");
        },
        updateEdit: function () {
            this.$("li").not(".note-edit").removeClass("active");
            this.$(".note-edit").addClass("active");
        },
        clickView: function () {
            this.trigger("nav:update:view nav:view");
            return false;
        },
        clickEdit: function () {
            this.trigger("nav:update:edit nav:edit");
            return false;
        },
        clickDelete: function () {
            this.trigger("nav:update:delete nav:delete");
            return false;
        }
    });
});