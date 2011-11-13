(function ($) {

	$.fn.addOnTop = function () {
		return this.each(function () {
			$this = $(this);
			$this.bind('click', function () {
				$mydiv = $this.siblings("div:first");
				$mydiv.before($mydiv.clone());
			});
		});
	};

})(jQuery);