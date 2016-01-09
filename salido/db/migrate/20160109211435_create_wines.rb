class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string :wine_name
      t.text :wine_description
      t.string :wine_geolocation
      t.string :wine_url
      t.string :wine_price_min
      t.string :wine_price_max
      t.string :wine_price_retail
      t.string :wine_type
      t.string :wine_year
      t.string :wine_appellation
      t.string :wine_varietal
      t.string :wine_vineyard
      t.string :wine_vineyard
      t.string :wine_product_attribute
      t.string :wine_label
      t.string :wine_rating
      t.string :wine_retail
      t.string :wine_vintage
      t.string :wine_community
      t.timestamps null: false
    end
  end
end
