class DeleteProductAttributesFromWines < ActiveRecord::Migration
  def change
    remove_column :wines, :wine_product_attribute
  end
end
