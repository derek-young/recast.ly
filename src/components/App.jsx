var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var Link = window.ReactRouter.Link;
var hashHistory = window.ReactRouter.hashHistory;

class App extends React.Component {
  constructor(props) {
    //pass props into super so an instance of App will have all properties found on props
    super(props);

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
        <Nav updateVideo={this.updateVideo.bind(this)} searchYouTube={this.props.searchYouTube}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>

        <p>//Link to videos</p>
        <Router history={hashHistory}>
          <Route path="/" component={VideoListWrapper}>
            {this.state.videoList.map((video) => (
              <Route path={video.id.videoId} component={VideoListEntryWrapper}/>
            ))}
          </Route>
        </Router>
      </div>
    );
  }

  videoListEntryWrapper(video) {
    return <VideoListEntry video={video} videoListClick={this.videoListClick.bind(this)}/>;
  }

  videoListClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  updateVideo(videos) {
    this.setState({
      videoList: videos,
      currentVideo: videos[0]
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

/*
Links to videos
<div className="col-md-5">
          <VideoList videos={this.state.videoList} videoListClick={this.videoListClick.bind(this)}/>
        </div>

*/

var VideoListWrapper = () => {
  return (
    <div className="col-md-5">
      <VideoList videos={App.state.videoList}/>
    </div>
  );
};

var VideoListEntryWrapper = () => (<VideoListEntry video={video} videoListClick={App.videoListClick.bind(App)}/>);

window.VideoListEntryWrapper = VideoListEntryWrapper;
window.VideoListWrapper = VideoListWrapper;


      // {links.map((link) => (
      //   <Route path='/videos' component={link.component}/>
      // ))}
