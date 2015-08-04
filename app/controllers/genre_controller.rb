class GenreController < ApplicationController
  def index
    @genres = Genres.all
  end

  def show
    @music = Music.where(:genre_id => params[:genre_id])
  end
end
