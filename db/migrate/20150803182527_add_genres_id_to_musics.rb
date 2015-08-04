class AddGenresIdToMusics < ActiveRecord::Migration
  def change
    add_column :musics, :genre_id, :integer
  end
end
