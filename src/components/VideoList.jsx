var VideoList = ({videos, videoClick}) => (
  <div className="video-list media">
    {videos.map((video) => (
      <VideoListEntry video={video}/>
    ))}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
