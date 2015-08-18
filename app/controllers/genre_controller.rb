class GenreController < ApplicationController
  def index
    @genres = Genres.all
  end

  def show
    @favorites = Favorites.where(user_id: session[:user_id])

    favoriteMusic = []
    @favorites.each do |favorite|
      favoriteMusic = favorite.music_id
    end
    @musicFavoured  = Music.where(id: favoriteMusic, genre_id: params[:genre_id])
    @musicUnfavoured = Music.where.not(id: favoriteMusic).where(genre_id: params[:genre_id])
  end
end
