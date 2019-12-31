import React, { Component } from "react";

class SongCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      err: false
    };
  }

  componentDidMount() {
    const videos = document.querySelectorAll("video");
    for (let i = 0; i < videos.length; i++) {
      videos[i].addEventListener("error", () => {
        this.setState({
          err: true
        });
      });
    }
  }

  render() {
    return (
      <div
        className="song"
        onClick={e =>
          this.props.songClicked(
            this.props.asrc,
            this.props.isrc,
            this.props.title,
            this.state.err
          )
        }
      >
        {this.state.err ? (
          <img
            className="image"
            src={require(`${this.props.isrc}.gif`)}
            alt="Relaxing GIF"
            title="Your browser does not support the <video> tag"
          />
        ) : (
          <video
            className="image"
            src={require(`${this.props.isrc}.mp4`)}
            type="video/mp4"
            autoPlay
            loop
            muted
          ></video>
        )}

        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default SongCard;
