import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div >
        <iframe className='mainvideo'
          width="60%"
          height="600"
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
          title="Video player"
        />
      </div>
      <div>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
