class App extends React.Component {
  constructor(props) {
    //pass props into super so an instance of App will have all properties found on props
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0]
    };
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={window.exampleVideoData} videoListClick={this.videoListClick.bind(this)}/>
        </div>
      </div>
    );
  }

  videoListClick(video) {
    this.setState({
      currentVideo: video
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


