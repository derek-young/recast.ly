
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
    this.forceUpdate()
  }
}
