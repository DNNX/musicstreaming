class GenreController < ApplicationController
  def index
    @genres = Genres.all
  end

  def show
    @favorites = Favorites.where(user_id: session[:user_id])

    favoriteMusic = []
    @favorites.each do |favorite|
      favoriteMusic.push(favorite.music_id)
    end
    @musicFavoured = Music.where(id: favoriteMusic, genre_id: params[:genre_id])
    @musicUnfavoured = Music.where.not(id: favoriteMusic).where(genre_id: params[:genre_id])
    @musicFavoured.each do |favorite|
      favorite.ifFavorite = true
    end
    @musicUnfavoured.each do |favorite|
      favorite.ifFavorite = false
    end
    @music = (@musicFavoured + @musicUnfavoured).sort_by(&:title)

  end
end
