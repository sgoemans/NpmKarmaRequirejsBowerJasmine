/**
 * Created by Goemans.Stephan on 30.07.2014.
 */
define(["notemodel"], function(Note){
    describe("App.Models.Note", function () {
        beforeEach(function () {
            this.model = new Note();
        });
        it("should be defined", function () {
            expect(Note).toBeDefined();
        });
        it("should have appropriate default values", function () {
            expect(this.model.get('title')).toEqual('');
            expect(this.model.get('createdAt') instanceof Date).toBeTruthy();
        });
        it("can trigger a change event", function (done) {
            var self = this;
            // Event that is triggered by changing the model's title
            this.model.once("change:title", function () {
                expect(self.model.get('title')).toEqual("My Title");
                done();
            });
            // Make our note trigger a change event
            this.model.set({
                title: "My Title"
            });
        });
        it("throws an error if text is empty", function (done) {
            var self = this;
            // Event that is triggered by changing the text's value to empty
            this.model.on("invalid", function (model, error) {
                expect(error).toEqual('Text must not be empty');
                done();
            });
            // Make our note trigger a change event
            this.model.set({
                    text: ""
                },
                {
                    validate: true
                });
        });
    });
});