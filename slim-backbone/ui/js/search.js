define(['jquery'],
	function($) {
		var $search = $('#search'),
			searchTimeout,
			searchTimeoutValue = 500,
			searchValue = $search.val();

		$search
			.on('keydown', function(e) {
				var $this = $(this);

				clearTimeout(searchTimeout);
				$search.css('background', 'lightgrey');
				searchValue = $this.val();
			})
			.on('keyup', function(e) {
				var $this = $(this);

				searchTimeout = setTimeout(function() {
					if (searchValue !== $this.val()) {
						window.location.hash = '#/film/search/' + escape($this.val());
					}
				}, searchTimeoutValue);
			});

		return $search;
	}
);
