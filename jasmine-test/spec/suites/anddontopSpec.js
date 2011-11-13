describe("Testing Jasmine", function () {
	describe("Click", function () {
		var fixturesContainer = function () {
				return $('#' + jasmine.getFixtures().containerId);
			};
		jasmine.getFixtures().fixturesPath = 'spec/fixtures/';

		beforeEach(function () {
			loadFixtures('addontop.html');
			$(fixturesContainer()).find("input[type='button']").addOnTop();
		});

		it("shoud add a div on top", function () {
			$(fixturesContainer()).find("input[type='button']").trigger('click');
			expect($(fixturesContainer()).find("div").length).toEqual(2);
		});

	});
});