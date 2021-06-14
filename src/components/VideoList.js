import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
	// props.videos from App.js were desconstructed into videos at line 4
	const renderList = videos.map((video) => {
		return <VideoItem />;
	});
	return <div>{renderList}</div>;
};

export default VideoList;
