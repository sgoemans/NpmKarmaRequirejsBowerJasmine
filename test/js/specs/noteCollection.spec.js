/**
 * Created by goemans.stephan on 01.08.2014.
 */
define(['backbone', 'notecollection'], function(Backbone, Notes) {
    describe('App.Collections.Notes', function () {
        beforeEach(function () {
            // Create a reference for all internal suites/specs.
            this.notes = new Notes();
            // Use internal method to clear out existing data.
            this.notes.localStorage._clear();
        });
        afterEach(function () {
            // Remove the reference.
            this.notes = null;
        });
        describe("instantiation", function () {
            it("has correct instanceof and zero length values", function () {
                expect(this.notes instanceof Notes).toBeTruthy();
                expect(this.notes.length).toEqual(0);
            });
            it('should be emtpy on fetch', function (done) {
                var self = this;
                this.notes.once("reset", function () {
                    expect(self.notes.length).toEqual(0);
                    // Async code has completed. Signal test is done.
                    done();
                });
                this.notes.fetch({reset: true});
            });
        });
        describe("when adding a note the collection", function () {
            beforeEach(function () {
                // Create a single note in the collection. Using create causes following events to fire:
                // -> an immediate "add" event to be triggered on the collection,
                // -> a "request" event as the new model is sent to the server,
                // -> a "sync" event, once the server has responded with the successful creation of the model.
                // Pass {wait: true} if you'd like to wait for the server before adding the new model to the collection.
                this.notes.create({
                    title: "Test note #1",
                    text: "A pre-existing note from beforeEach."
                });
            });
            afterEach(function () {
                // Wipe internal data and reset collection.
                this.notes.reset();
            });
            it('has a single note', function (done) {
                var self = this;
                this.notes.once('reset', function () {
                    // Like an array, a Collection maintains a length property, counting the number of models it contains.
                    expect(self.notes.length).toEqual(1);
                    var note = self.notes.at(0);
                    expect(note).toBeDefined();
                    expect(note.get('title')).toEqual('Test note #1');
                    expect(note.get('text')).toContain('pre-existing');
                    done();
                });
                this.notes.fetch({reset: true});
            });

            it('can remove a note', function (done) {
                var self = this;

                this.notes.once('remove', function () {
                    expect(self.notes.length).toEqual(0);
                    done();
                });
                var note = this.notes.shift();
                // expect(note).toBeDefined();
            });
        });
        describe('fired events', function () {
            it('fires the "add" event on create', function (done) {
                var self = this;
                this.notes.once('add', function () {
                    expect(self.notes.length).toEqual(1);
                    done();
                });
                this.notes.create({
                    title: "Test note #2",
                    text: "A newly created note."
                });
            });
            it('fires the "sync" event on create', function (done) {
                var self = this;
                this.notes.once('sync', function () {
                    expect(self.notes.length).toEqual(1);
                    done();
                });
                this.notes.create({
                    title: "Test note #3",
                    text: "Again a newly created note."
                });
            });
        });
    });
});
