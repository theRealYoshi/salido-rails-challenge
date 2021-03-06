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
  _navigateAddWineForm: function(){
    this.history.pushState(null, "/create", {});
  },
  _navigateWineShow: function(event){
    var wineId = event.currentTarget.id;
    this.history.pushState(null, "/wines/" + wineId, {});
  },
  render: function(){
    return (
      <div className='index'>
        <div className='wines-container'>
          <button className='create-button'
             onClick={this._navigateAddWineForm}
             id="create">
           Add More Wine to Database
         </button>
          <label>Wine Products:</label>
          {
            this.state.wines.map(function(wine){
              return (
                <div>
                  <h3>{wine.wine_name}</h3>
                  <button onClick={this._navigateWineShow}
                     id={wine.wine_id}>
                    {wine.wine_name} Wine Page
                  </button>
                  <ul>
                    <li>id: {wine.wine_id}</li>
                    <li>description: {wine.wine_description}</li>
                    <li>region: {wine.wine_geolocation}</li>
                    <li>url: {wine.wine_url}</li>
                    <li>Minimum Price: {wine.wine_price_min}</li>
                    <li>Maximum Price: {wine.wine_price_max}</li>
                    <li>Retail Price: {wine.wine_price_retail}</li>
                    <li>Type: {wine.wine_type}</li>
                    <li>Year: {wine.wine_year}</li>
                    <li>Appellation: {wine.wine_appellation}</li>
                    <li>Varietal: {wine.wine_varietal}</li>
                    <li>Vineyard: {wine.wine_vineyard}</li>
                    <li>Label: {wine.wine_label}</li>
                    <li>Rating: {wine.wine_rating}</li>
                    <li>Retail: {wine.wine_retail}</li>
                    <li>Vintage: {wine.wine_vintage}</li>
                    <li>Community: {wine.wine_community}</li>
                  </ul>
                </div>
              );
            }.bind(this))
          }
        </div>
      </div>
    );
  }
});
