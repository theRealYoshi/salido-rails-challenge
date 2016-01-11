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
    WineStore.addSingleChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    WineStore.removeChangeListener(this._onChange);
    WineStore.removeSingleChangeListener(this._onChange);
  },
  _navigateUpdateWineForm: function(){
    this.history.pushState(null, "/update/" + this.state.wine.wine_id, {});
  },
  render: function(){
    var wine = this.state.wine;
    return (
      <div>
        <h3>{this.state.wine.wine_name}</h3>
        <button onClick={this._navigateUpdateWineForm} >
          Update {this.state.wine.wine_name}
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
        <a href="/">back</a>
      </div>
    );
  }
})
