import React from "react";

function SongCard(props) {
  return (
    <div
      className="song"
      onClick={e => props.songClicked(props.asrc, props.isrc, props.title)}
    >
      <video className="image" autoPlay loop muted playsInline>
        <source src={require(`${props.isrc}.mp4`)} type="video/mp4" />
        <img src={require(`${props.isrc}.gif`)} alt="Relaxing GIF" />
      </video>
      <h4>{props.title}</h4>
    </div>
  );
}

export default SongCard;
