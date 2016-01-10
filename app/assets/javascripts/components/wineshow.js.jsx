var WineShow = React.createClass({
  mixins: [ReactRouter.History],
  getStateFromStore: function () {
    return { wine: WineStore.find(parseInt(this.props.params.wineId)) };
  },
  getInitialState: function(){
    return this.getStateFromStore();
  },
  _onChange: function(){
    this.setState(this.getStateFromStore());
  },
  componentWillMount: function(){
    ApiUtil.fetchSingleGif(parseInt(this.props.params.gifId));
    WineStore.addSingleChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    WineStore.removeChangeListener(this._onChange);
    WineStore.removeSingleChangeListener(this._onChange);
  },
  _navigateUpdateWineForm: function(){
    this.history.pushState(null, "/update/" + this.state.wine.wineId, {});
  },
  render: function(){
    return (
      <div>
        <h3>{this.state.wine.wine_name}</h3>
        <a onClick={this._navigateUpdateWineForm} >
          Update this Wine's information
        </a>
        <ul>
          <li>id: {this.state.wine.wine_id}</li>
          <li>description: {this.state.wine.wine_description}</li>
          <li>region: {this.state.wine.wine_geolocation}</li>
          <li>url: {this.state.wine.wine_url}</li>
          <li>Minimum Price: {this.state.wine.wine_price_min}</li>
          <li>Maximum Price: {this.state.wine.wine_price_max}</li>
          <li>Retail Price: {this.state.wine.wine_price_retail}</li>
          <li>Type: {this.state.wine.wine_type}</li>
          <li>Year: {this.state.wine.wine_year}</li>
          <li>Appellation: {this.state.wine.wine_appellation}</li>
          <li>Varietal: {this.state.wine.wine_varietal}</li>
          <li>Vineyard: {this.state.wine.wine_vineyard}</li>
          <li>Label: {this.state.wine.wine_label}</li>
          <li>Rating: {this.state.wine.wine_rating}</li>
          <li>Retail: {this.state.wine.wine_retail}</li>
          <li>Vintage: {this.state.wine.wine_vintage}</li>
          <li>Community: {this.state.wine.wine_community}</li>
        </ul>
      </div>
    );
  }
})
