var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;

class AppWrapper extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videoList: [],
      currentVideo: window.exampleVideoData[0]
    };
  }

  componentDidMount() {
    window.searchYouTube({query: 'skiing'}, this.updateVideo.bind(this));
  }

  render() {
    return (
      <div>
        <Nav updateVideo={this.updateVideo.bind(this)} searchYouTube={window.searchYouTube}/>
        <div className="col-md-7">
          <Router history={hashHistory}>
            <Route path="/" component={() => (<AppWrapper/>)}>
              {this.state.videoList.map((video) => {
                return (
                <Route path={`/${video.id.videoId}`} component={() => (<VideoPlayer video={video}/>)}/>
              )})}
            </Route>
          </Router>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList}/>
        </div>
      </div>
    );
  }

  updateVideo(videos) {
    this.setState({
      videoList: videos,
      currentVideo: videos[0]
    });
  }
}
