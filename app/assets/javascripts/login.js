App.login = function () {
    this.init();
};
App.login.prototype = {
    /**
     * inits login/register
     */
    init: function () {
        $('.container .login').css('margin-top', $(window).height() / 2 - $('.login').height() / 2 + "px");
        $('.container .register').css('margin-top', $(window).height() / 2 - $('.register').height() / 2 + "px");
    },
    /**
     * binds Events from login/register
     */
    bindEvents: function () {
        $(window).resize(function () {
            $('.container .login').css('margin-top', $(window).height() / 2 - $('.login').height() / 2 + "px");
            $('.container .register').css('margin-top', $(window).height() / 2 - $('.register').height() / 2 + "px");
        }).trigger('resize');
    }
};