require 'spec_helper'
require 'rails_helper'

RSpec.describe Api::WinesController, type: :controller do
  render_views

  let(:json) { JSON.parse(response.body) }


  context 'all wines' do
    before do
      get :index, format: :json
    end
    it 'retrieves a list of wines' do
      expect(json.collect{|l| l["wine_id"]}).to include(@wines1.wine_id)
    end
  end

end
