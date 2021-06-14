import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
	// props.videos from App.js were desconstructed into videos at line 4
  // console.log(videos);
	const renderList = videos.map((video) => {
		return <VideoItem video={video}/>;
	});
	return <div>{renderList}</div>;
};

export default VideoList;
