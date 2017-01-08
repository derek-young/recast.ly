class App extends React.Component {
  constructor(props) {
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
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} videoListClick={this.videoListClick.bind(this)}/>
        </div>
      </div>
    );
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
