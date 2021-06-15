import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
	// props.videos from App.js were desconstructed into videos at line 4
	// console.log(videos);
	const renderList = videos.map((video) => {
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
	});
	return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
