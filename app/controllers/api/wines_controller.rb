class Api::WinesController < ApplicationController

  def index
    @wines = Wine.all
  end

  def show
    Wine.find_by_wine_id(params[:id])

  end

  def create
    @wine = Wine.create(
      wine_id: params[:wine][:wine_id],
      wine_name: params[:wine][:wine_name] || "",
      wine_description: params[:wine][:wine_description] || "",
      wine_geolocation: params[:wine][:wine_geolocation] || "",
      wine_url: params[:wine][:wine_url] || "",
      wine_price_min: params[:wine][:wine_price_min] || "",
      wine_price_max: params[:wine][:wine_price_max] || "",
      wine_price_retail: params[:wine][:wine_price_retail] || "",
      wine_type: params[:wine][:wine_type] || "",
      wine_year: params[:wine][:wine_year] || "",
      wine_appellation: params[:wine][:wine_appellation] || "",
      wine_varietal: params[:wine][:wine_varietal] || "",
      wine_vineyard: params[:wine][:wine_vineyard] || "",
      wine_label: params[:wine][:wine_label] || "",
      wine_rating: params[:wine][:wine_rating] || "",
      wine_retail: params[:wine][:wine_retail] || "",
      wine_vintage: params[:wine][:wine_vintage] || "",
      wine_community: params[:wine][:wine_community] || ""
    )
    if @wine.save
      @wine.save!
    else
      puts "Wine could not be saved"
    end
    render :show
  end

  def update
    @wine = Wine.find_by_wine_id(params[:wine][:wine_id])
    if @wine
      @wine = Wine.update( @wine.id,
        wine_id: params[:wine][:wine_id],
        wine_name: params[:wine][:wine_name] || "",
        wine_description: params[:wine][:wine_description] || "",
        wine_geolocation: params[:wine][:wine_geolocation] || "",
        wine_url: params[:wine][:wine_url] || "",
        wine_price_min: params[:wine][:wine_price_min] || "",
        wine_price_max: params[:wine][:wine_price_max] || "",
        wine_price_retail: params[:wine][:wine_price_retail] || "",
        wine_type: params[:wine][:wine_type] || "",
        wine_year: params[:wine][:wine_year] || "",
        wine_appellation: params[:wine][:wine_appellation] || "",
        wine_varietal: params[:wine][:wine_varietal] || "",
        wine_vineyard: params[:wine][:wine_vineyard] || "",
        wine_label: params[:wine][:wine_label] || "",
        wine_rating: params[:wine][:wine_rating] || "",
        wine_retail: params[:wine][:wine_retail] || "",
        wine_vintage: params[:wine][:wine_vintage] || "",
        wine_community: params[:wine][:wine_community] || ""
      )
      @wine.save!
    else
      puts "not available"
    end
    render :show
  end


end
