class Music < ActiveRecord::Base
  belongs_to :genres
  mount_uploader :path, MusicUploader
end
