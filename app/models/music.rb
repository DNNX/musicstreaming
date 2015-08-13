class Music < ActiveRecord::Base
  belongs_to :genres
  has_many :favorites

  mount_uploader :path, MusicUploader
end
