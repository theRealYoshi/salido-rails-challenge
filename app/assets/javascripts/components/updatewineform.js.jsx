var UpdateWineForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin,ReactRouter.History],
  getInitialState: function(){
    return {
      wine_id: "",
      wine_name: "",
      wine_description: "",
      wine_geolocation: "",
      wine_url: "",
      wine_price_min: "",
      wine_price_max: "",
      wine_price_retail: "",
      wine_type: "",
      wine_year: "",
      wine_appellation: "",
      wine_varietal: "",
      wine_vineyard: "",
      wine_label: "",
      wine_rating: "",
      wine_retail: "",
      wine_vintage: "",
      wine_community: ""
    }
  },
  _addWine: function(event){
    event.preventDefault();
    var data = {
      wine_id: parseInt(this.state.id),
      wine_name: this.state.name,
      wine_description: this.state.description,
      wine_geolocation: this.state.region,
      wine_url: this.state.region,
      wine_price_min: this.state.price_min,
      wine_price_max: this.state.price_max,
      wine_price_retail: this.state.price_retail,
      wine_type: this.state.type,
      wine_year: this.state.year,
      wine_appellation: this.state.appellation,
      wine_varietal: this.state.varietal,
      wine_vineyard: this.state.vineyard,
      wine_label: this.state.label,
      wine_rating: this.state.rating,
      wine_retail: this.state.retail,
      wine_vintage: this.state.vintage,
      wine_community: this.state.community
    }
    ApiUtil.createWine(data, function(id){
      this.history.pushState(null, 'wines/' + id, {});
    }.bind(this));
  },
  render: function(){
    return (
      <div class="row">
        <h3>Add Some Wine</h3>
         <form className="upload-form" onSubmit={this._addWine}>
           <div className="form-group">
             <label>Id</label>
             <input type="text"
                    className="form-control"
                    placeholder="Id must be a number"
                    valueLink={this.linkState('id')}/>
           </div>
           <div className="form-group">
             <label>Name</label>
             <input type="text"
                    className="form-control"
                    placeholder="Name"
                    valueLink={this.linkState('name')}/>
           </div>
           <div className="form-group">
             <label>Description</label>
             <input type="text"
                    className="form-control"
                    placeholder="Description"
                    valueLink={this.linkState('description')}/>
           </div>
           <div className="form-group">
             <label>Region</label>
             <input type="text"
                    className="form-control"
                    placeholder="Region"
                    valueLink={this.linkState('region')}/>
           </div>
           <div className="form-group">
             <label>Url</label>
             <input type="text"
                    className="form-control"
                    placeholder="Url"
                    valueLink={this.linkState('url')}/>
           </div>
           <div className="form-group">
             <label>Minimum Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Minimum Price"
                    valueLink={this.linkState('price_min')}/>
           </div>
           <div className="form-group">
             <label>Maxium Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Maximum Price"
                    valueLink={this.linkState('price_max')}/>
           </div>
           <div className="form-group">
             <label>Retail Price</label>
             <input type="text"
                    className="form-control"
                    placeholder="Retail Price"
                    valueLink={this.linkState('price_retail')}/>
           </div>
           <div className="form-group">
             <label>Type</label>
             <input type="text"
                    className="form-control"
                    placeholder="Ex. Red or White"
                    valueLink={this.linkState('type')}/>
           </div>
           <div className="form-group">
             <label>Year</label>
             <input type="text"
                    className="form-control"
                    placeholder="Year"
                    valueLink={this.linkState('year')}/>
           </div>
           <div className="form-group">
             <label>Appellation</label>
             <input type="text"
                    className="form-control"
                    placeholder="Appellation"
                    valueLink={this.linkState('appellation')}/>
           </div>
           <div className="form-group">
             <label>Varietal</label>
             <input type="text"
                    className="form-control"
                    placeholder="Varietal"
                    valueLink={this.linkState('varietal')}/>
           </div>
           <div className="form-group">
             <label>Vineyard</label>
             <input type="text"
                    className="form-control"
                    placeholder="Vineyard"
                    valueLink={this.linkState('vineyard')}/>
           </div>
           <div className="form-group">
             <label>Label</label>
             <input type="text"
                    className="form-control"
                    placeholder="Label"
                    valueLink={this.linkState('label')}/>
           </div>
           <div className="form-group">
             <label>Rating</label>
             <input type="text"
                    className="form-control"
                    placeholder="Rating"
                    valueLink={this.linkState('rating')}/>
           </div>
           <div className="form-group">
             <label>Retail</label>
             <input type="text"
                    className="form-control"
                    placeholder="Retail"
                    valueLink={this.linkState('retail')}/>
           </div>
           <div className="form-group">
             <label>Vintage</label>
             <input type="text"
                    className="form-control"
                    placeholder="Vintage"
                    valueLink={this.linkState('vintage')}/>
           </div>
           <div className="form-group">
             <label>Community</label>
             <input type="text"
                    className="form-control"
                    placeholder="Community"
                    valueLink={this.linkState('community')}/>
           </div>
           <br />
           <button type="submit"
                   className="btn btn-default btn-lg">
                   Add Wine
           </button>
         </form>
      </div>
    );
  }
})
