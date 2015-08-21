class Music < ActiveRecord::Base
  belongs_to :genres
  has_many :favorites
  attr_accessor :ifFavorite

  mount_uploader :path, MusicUploader
end
