App.content = function (options) {
	this.options = $.extend({
		element: $('#content'),
		nav: $('#nav'),
		music: $('.music'),
		overlay: $('.music-overlay')
	}, options);
	this.init();
};

App.content.prototype = {
	/**
	 * inits the content
	 * $returns {undefined}
	 */
	init: function () {
		$(this.options.element).width($(window).width() - $(this.options.nav).width());
		$(this.options.element).height($(window).height());
		$(this.options.element).mCustomScrollbar({
			axis: 'y',
			theme: 'dark'
		});
		this.updateMusicTiles();
		this.bindEvents();
	},
	/**
	 * binds Events
	 * $returns {undefined}
	 */
	bindEvents: function () {
		var me = this;
		$(window).resize(function () {
			$(me.options.element).width($(window).width() - $(me.options.nav).width());
			$(me.options.element).height($(window).height());
			me.updateMusicTiles();
		});
		$(this.options.music).hover(function () {
			$(this).find(me.options.overlay).css('left', '0');
		}, function () {
			$(this).find(me.options.overlay).css('left', '100%');
		});
		$('.icon-heart').hover(function () {
			if ($(this).hasClass('active')) {
				if ($(this).hasClass('icon-heart')) {
					$(this).removeClass('icon-heart');
					$(this).addClass('icon-heart-broken');
				} else {
					$(this).removeClass('icon-heart-broken');
					$(this).addClass('icon-heart');
				}
			}
			$('.icon-heart-broken').click(function () {
				$(this).parents('.music').remove();
			});
		});
		$('.icon-heart').click(function () {
			if ($(this).hasClass('active')) {

			} else {
				$(this).addClass('active');
				$(this).addClass('icon-heart-broken');
				$(this).removeClass('icon-heart');
			}
		});
	},
	/**
	 * updates the musictiles width
	 * $returns {undefined}
	 */
	updateMusicTiles: function () {
		var tiles = 1;
		if ($(window).width() > 1550) {
			tiles = 6;
		} else if ($(window).width() > 1280) {
			tiles = 5;
		} else if ($(window).width() > 768) {
			tiles = 4;
		}
		if (tiles === 1) {
			$(this.options.music).width(($(this.options.music).parent().width() / tiles) - 20);
		} else {
			$(this.options.music).width(($(this.options.music).parent().width() / tiles));
		}
		$(this.options.overlay).each(function () {
			$(this).width($(this).parent().width());
			$(this).height($(this).parent().find('img').height());
		});
		$('.wrapper').masonry({
			// set itemSelector so .grid-sizer is not used in layout
			itemSelector: '.wrapper .music'
		});
	}
};