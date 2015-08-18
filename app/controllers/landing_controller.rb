# encoding: utf-8

class LandingController < ApplicationController
  def index
    @favorites = Favorites.where(:user_id => session[:user_id])

    favoriteMusic = []
    @favorites.each do |favorite|
      favoriteMusic = favorite.music_id
    end
    @music = Music.where(id: favoriteMusic)
  end
end
