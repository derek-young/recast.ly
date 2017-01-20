class VideoList extends React.Component {
  render() {
    return (
      <div className="video-list media">
        {this.props.videos.map((video) => (
          <VideoListEntry video={video} videoListClick={this.props.videoListClick}/>
        ))}
      </div>
    );
  }
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
