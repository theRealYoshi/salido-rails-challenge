$(function() {

  var root = document.getElementById('content');

  var RouteHandler = ReactRouter.RouteHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
          <div>
            {this.props.children}
          </div>
      );
    }
  });

  var routes = (
      <Route component={App}>
        <Route path="/" component={Index} />
        <Route path="/create" component={AddWineForm} />
        <Route path="/wines/:wineId" component={WineShow} />
        <Route path="/update/:wineId" component={UpdateWineForm} />
      </Route>
  );

  if (root) {
    React.render(<Router>{routes}</Router>, root);
  }
});
