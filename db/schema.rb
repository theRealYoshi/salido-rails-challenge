# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160109211435) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "wines", force: :cascade do |t|
    t.string   "wine_name"
    t.text     "wine_description"
    t.string   "wine_geolocation"
    t.string   "wine_url"
    t.string   "wine_price_min"
    t.string   "wine_price_max"
    t.string   "wine_price_retail"
    t.string   "wine_type"
    t.string   "wine_year"
    t.string   "wine_appellation"
    t.string   "wine_varietal"
    t.string   "wine_vineyard"
    t.string   "wine_product_attribute"
    t.string   "wine_label"
    t.string   "wine_rating"
    t.string   "wine_retail"
    t.string   "wine_vintage"
    t.string   "wine_community"
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

end
