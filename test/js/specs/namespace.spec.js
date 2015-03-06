/**
 * Created by Goemans.Stephan on 30.07.2014.
 */
require(["namespace"], function(App) {
    describe("Namespace ", function () {
        it("should include 'App' object", function () {
            expect(App).toBeDefined();
            expect(App.Views).toBeDefined();
            expect(App.Models).toBeDefined();
            expect(App.Collections).toBeDefined();
            expect(App.Routers).toBeDefined();
        });
/*        it("should include the 'app' object", function () {
            expect(app).toBeDefined();
        })*/
    });
});