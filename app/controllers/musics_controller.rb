#encoding: utf-8
class MusicsController < ApplicationController
  def new
    @music = Music.new
  end
  def create
    @music = Music.new(music_params)

    respond_to do |format|
      if @music.save
        format.html { redirect_to landing_index_path, alert: 'Deine Musik wurde erfolgreich hochgeladen!' }
        format.json { render :show, status: :created, location: @music }
      else
        format.html { redirect_to new_music_path, alert: 'Ups! Irgentwas ging schief :( überprüfe nochmal deine eingaben'}
      end
    end
  end
  def music_params
    params.require(:music).permit(:title, :interpret, :path, :genre_id)
  end
end
