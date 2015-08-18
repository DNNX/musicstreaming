class FavoritesController < ApplicationController
  def new
    @favorite = Favorites.where(user_id: session[:user_id],music_id: params[:music_id])
    if @favorite.any? == false
      @favorite = Favorites.new(user_id: session[:user_id],music_id: params[:music_id])
      if @favorite.save
        respond_to do |format|
          format.js
        end
      end
    end
  end
  def destroy
    Favorites.destroy_all(user_id: session[:user_id],music_id: params[:music_id])
  end
end
