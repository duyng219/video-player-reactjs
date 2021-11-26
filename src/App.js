//https://www.npmjs.com/package/react-video-js-player
import React from "react";
import VideoPlayer from "react-video-js-player";
import video from "./video/video.mp4";

const App = () => {
  const videoSrc = video;
  const poster = "https://i.ytimg.com/vi/AUz0JNWLt30/maxresdefault.jpg";

  return (
    <div>
      <h1>Video</h1>
      <VideoPlayer src={videoSrc} poster={poster} width="720" height="420" />
    </div>
  );
};

export default App;
