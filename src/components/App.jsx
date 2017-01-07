class App extends React.Component {
  constructor(props) {
    //pass props into super so an instance of App will have all properties found on props
    super(props);

    this.state = {
      videoList: [],
      currentVideo: window.exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav updateVideo={this.updateVideo.bind(this)} searchYouTube={this.props.searchYouTube}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} videoListClick={this.videoListClick.bind(this)}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'skiing'}, this.updateVideo.bind(this));
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


