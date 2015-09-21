App.nav = function (options) {
	this.options = $.extend({
		content: $('#content'),
		nav: $('#nav')
	}, options);
	this.init();
};
App.nav.prototype = {
	/**
	 * inits the content
	 * $returns {undefined}
	 */
	init: function () {
		$(this.options.nav).height($(window).height());
		this.bindEvent();
	},
	/**
	 * bind events
	 * $returns {undefined}
	 */
	bindEvent: function () {
		var me = this;
		$(window).resize(function () {
			$(me.options.nav).height($(window).height());
		});
		$('.mobile-open').click(function(){
			$(me.options.nav).addClass('active');
			$(me.options.content).addClass('active');
			$(this).addClass('active');
		});
		$('.mobile-close').click(function(){
			$(me.options.nav).removeClass('active');
			$(me.options.content).removeClass('active');
			$('.mobile-open').removeClass('active');
		});
	}
};

		