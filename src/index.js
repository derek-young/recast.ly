var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path = '/videos' component={VideoList}>
        <Route path={`/videos:videoId`} component={VideoListEntry}/>
      </Route>
    </Route>
  </Router>, document.getElementById('app'));
