var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;

class VideoWrapper extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.children}</div>
        <div className='col-md-5'>
          {console.log('rendered with videos ', this.props.route.videos)}
          <VideoList videos={this.props.route.videos}/>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      videoList: window.exampleVideoData,
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
        <div className='col-md-7'>
          <Router history={hashHistory}>
            <Route path='/' videos={this.state.videoList} component={VideoWrapper}>
              {this.state.videoList.map((video) => {
                {console.log(video.id.videoId)}
                return (
                  <Route path={`/${video.id.videoId}`} component={() => (<VideoPlayer video={video}/>)}/>
                )
              })}
            </Route>
          </Router>
        </div>
      </div>
    );
  }

  updateVideo(videos) {
    this.setState({
      videoList: videos,
      currentVideo: videos[0]
    });
    this.forceUpdate()
  }
}
