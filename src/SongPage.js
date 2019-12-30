import React from "react";
import "./SongPage.css";

function SongPage(props) {
  return (
    <div className="wrapper">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        onClick={props.backClicked}
        className="back"
      >
        <path
          fill="#111111"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        ></path>
      </svg>
      <div className="song-page">
        <video className="page-image" autoPlay loop muted playsInline>
          <source src={require(`${props.isrc}.mp4`)} type="video/mp4" />
        </video>
        <h3 className="song-title-page">{props.title}</h3>
        <div className="audio-player">
          <audio src={props.asrc} controls>
            <source src="" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default SongPage;
