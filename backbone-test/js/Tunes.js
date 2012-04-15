(function($) {

	window.Album = Backbone.Model.extend({

		isFirstTrack: function(index) {
			return index === 0;
		},

		isLastTrack: function(index) {
			return index >= this.get('tracks').length - 1;
		},

		trackUrlAtIndex: function(index) {
			if (this.get('tracks').length >= index) {
				return this.get('tracks')[index].url;
			}
			return null;
		}

	});

	window.Albums = Backbone.Collection.extend({
		model: Album,
		url: "/albums"
	});

	window.library = new Albums();


	$(document).ready(function() {

		window.AlbumView = Backbone.View.extend({
			template: _.template($("#album-template").html()),
			tag: 'li',
			className: 'album',

			initialize: function() {
				_.bindAll(this, 'render');
			},

			render: function() {
				$(this.el).html(this.template(this.model.toJSON()));
				return this;
			}
		});

		window.LibraryAlbumView = AlbumView.extend({
		});

		window.LibraryView = Backbone.View.extend({
			tagName: 'section',
			className: 'library',
			template: _.template($('#library-template').html()),

			initialize: function() {
				_.bindAll(this, 'render');
				this.collection.bind('reset', this.render);
			},

			render: function() {
				var $albums,
				collection = this.collection;

				$(this.el).html(this.template({}));
				$albums = this.$(".albums");
				this.collection.each(function(album) {
					var view = new LibraryAlbumView({
						model: album,
						collection: collection
					});
					$albums.append(view.render().el);
				});

				return this;
			}
		});

		window.libraryView = new LibraryView({
			collection: window.library
		});
		$("#container").append(window.libraryView.render().el);
	});

})(jQuery);

// vim:sw=4:ts=4:expandtab
