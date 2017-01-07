var searchYouTube = ({query, max = '10', key = window.YOUTUBE_API_KEY}, callback) => {
  var url = 'https://www.googleapis.com/youtube/v3/search?';
  var data = {
    part: 'snippet',
    q: query,
    type: 'video',
    maxResults: max,
    videoDefinition: 'high',
    videoEmbeddable: 'true',
    key: key
  };

  $.ajax({
    dataType: 'json',
    type: 'GET',
    url: url,
    data: data,
    success: (response) => (callback(response.items))
  });
};

window.searchYouTube = searchYouTube;