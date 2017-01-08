var VideoList = ({videos, videoListClick}) => (
  <div className="video-list media">
    <p>Hello</p>
    {this.props.children}
    {videos.map((video) => (
      <li><Link to={video.id.videoId}>{video.snippet.title}</Link></li>
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;

/*
{videos.map((video) => (
      <VideoListEntry video={video} videoListClick={videoListClick}/>
    ))}

*/