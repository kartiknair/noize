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
      error: false,
      title: ""
    };
    this.songClicked = this.songClicked.bind(this);
    this.backClicked = this.backClicked.bind(this);
    this.aboutClicked = this.aboutClicked.bind(this);
  }

  songClicked(audio, image, name, err) {
    this.setState({
      asrc: audio,
      isrc: image,
      title: name,
      error: err,
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

  componentDidMount() {
    window.history.pushState(
      { name: "browserBack" },
      "on browser back click",
      window.location.href
    );

    window.addEventListener(
      "popstate",
      e => {
        if (e.state && (this.state.song || this.state.about)) {
          this.setState({
            song: false,
            about: false
          });
        }
      },
      false
    );
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
            error={this.state.error}
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
