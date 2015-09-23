class Music < ActiveRecord::Base
  belongs_to :genres
  has_many :favorites
  attr_accessor :ifFavorite

  validates :title,
            presence: true,
            allow_blank: false
  validates :interpret,
            presence: true,
            allow_blank:false
  validates :path,
            presence: true,
            allow_blank: false
  validates :genre_id,
            presence: true,
            allow_blank: false

  mount_uploader :path, MusicUploader
end
