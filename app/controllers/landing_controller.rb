# encoding: utf-8

class LandingController < ApplicationController
  def index
    @music = Music.all
  end
end
