App.profile = function () {
	this.init();
};
App.profile.prototype = {
	/**
	 * inits the content
	 * $returns {undefined}
	 */
	init: function () {
		$('.description').css('min-height', ($('.profile-pic .img img').height() + 2) + 'px');
		autosize($('textarea'));
	}
//	/**
//	 * bind events
//	 * $returns {undefined}
//	 */
//	bindEvent: function () {
//		var me = this;
//	}
};

		