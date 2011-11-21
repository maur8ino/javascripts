describe("Testing Jasmine", function () {
	describe("Undo changes user", function () {
		var fixturesContainer = function () {
				return $('#' + jasmine.getFixtures().containerId);
			};
		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';
		var $link;

		beforeEach(function () {
			loadFixtures('undoChangesUser.html');
			$link = $(fixturesContainer()).find("#userundolink_004");
			$link.undoChangesUser();
		});

		it("should hide edituser_ divs", function () {
			$link.trigger('click');
			expect($(fixturesContainer()).find("div[id^='edituser_']:visible").length).toEqual(0);
		});

		it("should enable status select", function () {
			$link.trigger('click');
			expect($(fixturesContainer()).find("select[id^='selectuser_']").is(":enabled")).toBeTruthy();
		});
	});
});