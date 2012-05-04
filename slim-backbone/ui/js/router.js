// Filename: router.js
define(['jquery', 'underscore', 'backbone', 'collections/films', 'views/film', 'views/filmDetail', 'views/filmList', 'search', 'jquery_scrollto'],
	function($, _, Backbone, FilmCollection, filmView, FilmDetailView, FilmListView, $search, jqst){
		var AppRouter = Backbone.Router.extend({

			filmListFetched: function() {
				var dfd = $.Deferred();
				dfd.resolve();
				return this.filmList.length === 0 ? this.filmList.fetch({dataType: 'jsonp'}) : dfd.promise();
			},

			initialize: function(options) {
				this.filmList = new FilmCollection();
			},

			routes: {
				"": "list",
				"film/:id": "getFilmDetails",
				"film/search/:name": "getSearch"
			},

			list: function () {
				var that = this;
				this.filmListFetched().done(function() {
					that.filmListView = new FilmListView({ model: that.filmList });
					$('#container').html(that.filmListView.render().el);
				});
			},

			getFilmDetails: function(id) {
				var that = this;
				this.filmListFetched().done(function() {
					if ($('#container').html().trim() === '') {
						that.list();
					}
					that.filmDetails = that.filmList.get(id);
					that.filmDetailView = new FilmDetailView({ model: that.filmDetails });
					$('#containerDetail').html(that.filmDetailView.render().el);
					$.scrollTo('#containerDetail', {duration: 800});
				});
			},
			getSearch: function(name) {
				var that = this,
					FilmCollectionSearch = FilmCollection.extend({url: "../api/film/search/" + name});
				this.filmList = new FilmCollectionSearch();
				$search.val(unescape(name));
				$search.css('background', 'red');
				this.filmListFetched().done(function() {
					that.list();
					$search.css('background', 'none');
					$("label[for='" + $search.attr('id') + "']").html(that.filmList.length + ' result(s)');
					$('#containerDetail').html('');
				});
			}
		});

		var initialize = function(){
			var app_router = new AppRouter();
			Backbone.history.start();
		};

		return {
			initialize: initialize
		};
	}
);
