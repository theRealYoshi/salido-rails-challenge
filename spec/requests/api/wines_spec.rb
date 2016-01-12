describe "api/wines" do

  describe "GET /api/wines" do
    it 'retrieves a all wines' do
      get "/api/wines"
      # test for the 200 status-code
      expect(response).to be_success
    end
  end

  describe "PATCH /api/wines" do
    let(:id) { 1 }
    let(:params) {
      {
        id: id,
        wine_name: 'Test Modified'
      }
    }

    it 'updates a specified wine' do
      patch "/api/wines", params
      # test for the 200 status-code
      expect(response).to be_success
    end
  end

end
