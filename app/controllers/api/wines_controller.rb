class Api::WinesController < ApplicationController
  def index
    @wines = Wine.all
    puts @wines
  end

  def show

  end

  def create

  end

  def update

  end


end
