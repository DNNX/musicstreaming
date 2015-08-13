# encoding: utf-8

class LandingController < ApplicationController
  def index
    @favorites = Favorites.where(:user_id => session[:user_id])
    @music = @favorites[:music_id].collect {|i| Music.where(:id => i) }.flatten
  end
end
