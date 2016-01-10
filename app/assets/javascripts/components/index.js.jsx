var Index = React.createClass({
  mixins: [ReactRouter.History],
  _getAllWines: function(){
    return WineStore.all();
  },
  getInitialState: function(){
    return {
      wines: this._getAllWines(),
    };
  },
  _winesChanged: function(){
    this.setState({ wines: this._getAllWines()});
  },
  componentWillMount: function(){
    WineStore.addChangeListener(this._winesChanged);
    ApiUtil.fetchWines();
  },
  componentWillUnmount: function(){
    WineStore.removeChangeListener(this._winesChanged);
  },
  _handleTagSearch: function(searchTerm){
    ApiUtil.fetchGifs({tag: searchTerm}, true);
    this.history.pushState(null, "/search/" + searchTerm, {});
  },
  render: function(){
    return (
      <div className='index'>
        <div className='wines-container'>
          <label>Wine Products:</label>
          {
            this.state.wines.map(function(wine){
              return (
                <div>
                  <h3>{wine.wine_name}</h3>
                  <ul>
                    <li>{wine.wine_id}</li>
                    <li>{wine.wine_description}</li>
                    <li>{wine.wine_geolocation}</li>
                    <li>{wine.wine_url}</li>
                    <li>{wine.wine_price_min}</li>
                    <li>{wine.wine_price_max}</li>
                    <li>{wine.wine_price_retail}</li>
                    <li>{wine.wine_type}</li>
                    <li>{wine.wine_year}</li>
                    <li>{wine.wine_appellation}</li>
                    <li>{wine.wine_varietal}</li>
                    <li>{wine.wine_vineyard}</li>
                    <li>{wine.wine_label}</li>
                    <li>{wine.wine_rating}</li>
                    <li>{wine.wine_retail}</li>
                    <li>{wine.wine_vintage}</li>
                    <li>{wine.wine_community}</li>
                  </ul>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
});
