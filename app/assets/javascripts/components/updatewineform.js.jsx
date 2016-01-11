var UpdateWineForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin,ReactRouter.History],
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
    this.getStateFromStore();
    WineStore.addSingleChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
    WineStore.removeChangeListener(this._onChange);
    WineStore.removeSingleChangeListener(this._onChange);
  },
  _onUpdate: function(id, event){
    event.preventDefault();
    this.state.wine[id] = event.currentTarget.value;
    this.setState({wine: this.state.wine});
  },
  _updateWine: function(event){
    event.preventDefault();
    var wine = this.state.wine;
    var data = {
      wine_id: parseInt(wine.wine_id),
      wine_name: wine.wine_name,
      wine_description: wine.wine_description,
      wine_geolocation: wine.wine_geolocation,
      wine_url: wine.wine_url,
      wine_price_min: wine.wine_price_min,
      wine_price_max: wine.wine_price_max,
      wine_price_retail: wine.wine_price_retail,
      wine_type: wine.wine_type,
      wine_year: wine.wine_year,
      wine_appellation: wine.wine_appellation,
      wine_varietal: wine.wine_varietal,
      wine_vineyard: wine.wine_vineyard,
      wine_label: wine.wine_label,
      wine_rating: wine.wine_rating,
      wine_retail: wine.wine_retail,
      wine_vintage: wine.wine_vintage,
      wine_community: wine.wine_community
    }
    ApiUtil.updateWine(data, wine.wine_id, function(id){
      this.history.pushState(null, 'wines/' + id, {});
    }.bind(this));
  },
  render: function(){
    var wine = this.state.wine;
    return (
      <div class="row">
        <h3>Update This Wine Product</h3>
         <form className="upload-form" onSubmit={this._updateWine}>
           <div className="form-group">
             <label>Id</label>
             <input type="text"
                    className="form-control"
                    placeholder="Id must be a number"
                    onChange={this._onUpdate.bind(null, "wine_id")}
                    value={wine.wine_id}/>
           </div>
           <div className="form-group">
             <label>Name</label>
             <input type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={this._onUpdate.bind(null, "wine_name")}
                    value={wine.wine_name}/>
           </div>
           <div className="form-group">
             <label>Description</label>
             <input type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={this._onUpdate.bind(null, "wine_description")}
                    value={wine.wine_description}/>
           </div>
           <div className="form-group">
             <label>Region</label>
             <input type="text"
                    className="form-control"
                    placeholder="Region"
                    onChange={this._onUpdate.bind(null, "wine_geolocation")}
                    value={wine.wine_geolocation}/>
           </div>
           <div className="form-group">
             <label>Url</label>
             <input type="text"
                    className="form-control"
                    placeholder="Url"
                    onChange={this._onUpdate.bind(null, "wine_url")}
                    value={wine.wine_url}/>
           </div>
           <div className="form-group">
             <label>Minimum Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Minimum Price"
                    onChange={this._onUpdate.bind(null, "wine_price_min")}
                    value={wine.wine_price_min}/>
           </div>
           <div className="form-group">
             <label>Maxium Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Maximum Price"
                    onChange={this._onUpdate.bind(null, "wine_price_max")}
                    value={wine.wine_price_max}/>
           </div>
           <div className="form-group">
             <label>Retail Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Retail Price"
                    onChange={this._onUpdate.bind(null, "wine_price_retail")}
                    value={wine.wine_price_retail}/>
           </div>
           <div className="form-group">
             <label>Type</label>
             <input type="text"
                    className="form-control"
                    placeholder="Ex. Red or White"
                    onChange={this._onUpdate.bind(null, "wine_type")}
                    value={wine.wine_type}/>
           </div>
           <div className="form-group">
             <label>Year</label>
             <input type="text"
                    className="form-control"
                    placeholder="Year"
                    onChange={this._onUpdate.bind(null, "wine_year")}
                    value={wine.wine_year}/>
           </div>
           <div className="form-group">
             <label>Appellation</label>
             <input type="text"
                    className="form-control"
                    placeholder="Appellation"
                    onChange={this._onUpdate.bind(null, "wine_appellation")}
                    value={wine.wine_appellation}/>
           </div>
           <div className="form-group">
             <label>Varietal</label>
             <input type="text"
                    className="form-control"
                    placeholder="Varietal"
                    onChange={this._onUpdate.bind(null, "wine_varietal")}
                    value={wine.wine_varietal}/>
           </div>
           <div className="form-group">
             <label>Vineyard</label>
             <input type="text"
                    className="form-control"
                    placeholder="Vineyard"
                    onChange={this._onUpdate.bind(null, "wine_vineyard")}
                    value={wine.wine_vineyard}/>
           </div>
           <div className="form-group">
             <label>Label</label>
             <input type="text"
                    className="form-control"
                    placeholder="Label"
                    onChange={this._onUpdate.bind(null, "wine_label")}
                    value={wine.wine_label}/>
           </div>
           <div className="form-group">
             <label>Rating</label>
             <input type="text"
                    className="form-control"
                    placeholder="Rating"
                    onChange={this._onUpdate.bind(null, "wine_rating")}
                    value={wine.wine_rating}/>
           </div>
           <div className="form-group">
             <label>Retail</label>
             <input type="text"
                    className="form-control"
                    placeholder="Retail"
                    onChange={this._onUpdate.bind(null, "wine_retail")}
                    value={wine.wine_retail}/>
           </div>
           <div className="form-group">
             <label>Vintage</label>
             <input type="text"
                    className="form-control"
                    placeholder="Vintage"
                    onChange={this._onUpdate.bind(null, "wine_vintage")}
                    value={wine.wine_vintage}/>
           </div>
           <div className="form-group">
             <label>Community</label>
             <input type="text"
                    className="form-control"
                    placeholder="Community"
                    onChange={this._onUpdate.bind(null, "wine_community")}
                    value={wine.wine_community}/>
           </div>
           <br />
           <button type="submit"
                   className="btn btn-default btn-lg">
                   Update Wine
           </button>
           <a href="/">back</a>
         </form>
      </div>
    );
  }
})
