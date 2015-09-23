class Genres < ActiveRecord::Base
  attr_accessor :ifFavorite
  has_many :music
end
