import React, { useState, useRef, useEffect } from "react";

function AudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    // Update duration
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // Update current time
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const seekTime = (event.target.value / 100) * audio.duration;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src}></audio>
      <div className="controls ">
        <button className="audio__button" onClick={handlePlayPause}>
          {isPlaying ? (
            <p className="m-0" title="pause">
              Pause
            </p>
          ) : (
            <img
              title="play"
              src="../../public/testimonial/Play.svg"
              alt=""
              className="play__button"
            />
          )}
        </button>
        <input
          type="range"
          className="seek-bar"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          step="any"
        />
        <span className="range__counter">{formatTime(currentTime)}</span>
        {/* <span>{formatTime(duration)}</span> */}
      </div>
      <img
        src="../../public/testimonial/Audio_Image.png"
        alt="Audio"
        className="audio-image "
      />
    </div>
  );
}

export default AudioPlayer;
