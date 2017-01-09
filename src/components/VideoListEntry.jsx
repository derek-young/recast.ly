var Link = window.ReactRouter.Link;

var VideoListEntry = ({video}) => {
  console.log(video.id.videoId);
  return (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt=""/>
    </div>
    <div className="media-body">
      <Link to={`/${video.id.videoId}`}>
        <div className="video-list-entry-title">{video.snippet.title}</div>
      </Link>
      <div className="video-list-entry-detail">
        {video.snippet.description}
      </div>
    </div>
  </div>
);
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
