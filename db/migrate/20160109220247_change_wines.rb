class ChangeWines < ActiveRecord::Migration
  def change
    add_column :wines, :wine_id, :integer, unique: true, null: false
    add_index :wines, [:wine_id], unique: true
  end
end
