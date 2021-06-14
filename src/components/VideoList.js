import React from 'react';

const VideoList = (props) => {
  // props.videos from App.js
  return <div>{props.videos.length}</div>
};

export default VideoList;