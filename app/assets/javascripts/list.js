App.list = function () {
    this.firstInit = true;
    this.isOpen = true;
    this.init();
};

App.list.prototype = {
    /**
     * inits the musiclist
     */
    init: function () {
        $('.content').height(($(window).height() - $('#header').height()) - 101);
        $('.wrapper').mCustomScrollbar({
            axis: 'y',
            autoHideScrollbar: true
        });
        $('#music_genre_id').selectBoxIt();
        this.bindEvents();
    },
    /**
     * binds Events from musiclist
     */
    bindEvents: function () {
        var me = this;
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
                $(this).parents('tr').remove();
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
        $('tr').click(function () {
            var interpret = $(this).children('.interpret').text();
            var title = $(this).children('.title').text();
            var path = $(this).children('.path').attr('data-path');
            if (me.firstInit) {
                $('.music-player .sm2-bar-ui').css('margin-bottom', '0');
                $('.sm2-playlist-target .sm2-playlist-bd li b').append(interpret);
                $('.sm2-playlist-target  .sm2-playlist-bd li').append(' - ' + title);
                me.firstInit = false;
                $('.sm2-playlist-wrapper .sm2-playlist-bd').append('<li class="selected"><a href="' + path + '"><b>' + interpret + '</b> - ' + title + '</a></li>');
            } else {
                $('.sm2-playlist-wrapper .sm2-playlist-bd').append('<li><a href="' + path + '"><b>' + interpret + '</b> - ' + title + '</a></li>');
            }
            soundManager.stopAll();
            soundManager.reboot();

        });
        $('.sm2-playlist-bd li').click(function(){
            soundManager.stopAll();
            soundManager.reboot();

        });
        $('.sm2-menu').click(function () {
            if (me.isOpen) {
                $('.sm2-playlist-drawer').height(0);
                $('.sm2-bar-ui').removeClass('playlist-open');
                me.isOpen = false;
            } else {
                $('.sm2-playlist-drawer').height($('.sm2-playlist-wrapper').height() + 16);
                $('.sm2-bar-ui').addClass('playlist-open');
                me.isOpen = true;
            }
        });
        $(window).resize(function () {
            $('.content').height(($(window).height() - $('#header').height()) - 101);
        });
    }
}