var Link = window.ReactRouter.Link;
var hashHistory = window.ReactRouter.hashHistory;

class VideoListEntry extends React.Component {
  render () {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt=""/>
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" onClick={() => {
              this.props.videoListClick(this.props.video);
            }}>
            <Link to={`/videos/${this.props.video.id.videoId}`}>
              {this.props.video.snippet.title}
            </Link>
          </div>
          <div className="video-list-entry-detail">
            {this.props.video.snippet.description}
          </div>
        </div>
      </div>
    );
  }
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
