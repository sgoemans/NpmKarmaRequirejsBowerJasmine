define(['notenav', 'jquery', 'sinon'], function(NoteNav, $, Sinon) {
    describe('App.Views.NoteNav', function () {
        var $fixture = $([
            "<ul id='note-nav'>",
            "<li class='note-view'></li>",
            "<li class='note-edit'></li>",
            "<li class='note-delete'></li>",
            "</ul>"].join());

        beforeEach(function () {
            $fixture.appendTo($("#fixtures"));
            this.view = new NoteNav({
                el: $fixture
            });
        });
        afterEach(function () {
            this.view.remove();
            $("#fixtures").empty();
        });
        describe("events", function () {
            it("fires events on 'view' click", function () {
                var navSpy = Sinon.spy(),
                    updateSpy = Sinon.spy(),
                    otherSpy = Sinon.spy();
                this.view.on({
                    "nav:view": navSpy,
                    "nav:update:view": updateSpy,
                    "nav:edit nav:update:edit": otherSpy,
                    "nav:delete nav:update:delete": otherSpy
                });
                $fixture.find(".note-view").click();
                expect(navSpy.calledOnce).toBeTruthy();
                expect(updateSpy.calledOnce).toBeTruthy();
                expect(otherSpy.called).toBeFalsy();
            });
        });
    });
});