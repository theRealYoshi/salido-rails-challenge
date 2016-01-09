# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'net/http'
require 'json'

case Rails.env
  when "development"
    cloudinary_tag = "development_seed_data"
  when "production"
    cloudinary_tag = "production_seed_data"
end

def getUrl
  key = "0d272dad122fbc2723624ceb1cf9612c"
  url = "http://services.wine.com/api/beta2/service.svc/json/catalog?apikey=#{key}&size=100&sort=rating|ascending"
  resp = Net::HTTP.get_response(URI.parse(url))
  buffer = resp.body
  result = JSON.parse(buffer)
  return result['Products']['List']
end

getUrl.each do |wine|
  puts wine
  Wine.create(
    wine_id: wine["Id"] || "",
    wine_name: wine["Name"] || "",
    wine_description: wine["Description"] || "",
    wine_geolocation: wine["Appellation"]["Region"]["Name"] || "",
    wine_url: wine["Url"] || "",
    wine_price_min: wine["PriceMin"] || "",
    wine_price_max: wine["PriceMax"] || "",
    wine_price_retail: wine["PriceRetail"] || "",
    wine_type: wine["Varietal"]["WineType"]["Name"] || "",
    wine_year: wine["Year"] || "",
    wine_appellation: wine["Appellation"]["Url"] || "",
    wine_varietal: wine["Varietal"]["Name"] || "",
    wine_vineyard: wine["Vineyard"]["Name"] || "",
    wine_label: wine["Labels"][0]["Url"],
    wine_rating: wine["Ratings"]["HighestScore"] || "",
    wine_retail: wine["Retail"] || "",
    wine_vintage: wine["Vintage"] || "",
    wine_community: wine["Community"]["Url"] || ""
  )
end
