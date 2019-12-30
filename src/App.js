import React, { Component } from "react";
import "./App.css";
import Library from "./Library";
import SongPage from "./SongPage";
import About from "./About";

class App extends Component {
  constructor() {
    super();
    this.state = {
      about: false,
      song: false,
      isrc: "",
      asrc: "",
      title: ""
    };
    this.songClicked = this.songClicked.bind(this);
    this.backClicked = this.backClicked.bind(this);
    this.aboutClicked = this.aboutClicked.bind(this);
  }

  songClicked(audio, image, name) {
    this.setState({
      asrc: audio,
      isrc: image,
      title: name,
      song: true
    });
  }

  backClicked() {
    this.setState({
      song: false,
      about: false
    });
  }

  aboutClicked(e) {
    e.preventDefault();
    this.setState({
      about: true
    });
  }

  render() {
    if (this.state.song) {
      return (
        <div className="app">
          <SongPage
            isrc={this.state.isrc}
            asrc={this.state.asrc}
            title={this.state.title}
            backClicked={this.backClicked}
          />
        </div>
      );
    } else if (this.state.about) {
      return (
        <div className="app">
          <About backClicked={this.backClicked} />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Library
            songClicked={this.songClicked}
            aboutClicked={this.aboutClicked}
          />
        </div>
      );
    }
  }
}

export default App;
