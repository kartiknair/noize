import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="chevron-left"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        onClick={props.backClicked}
        className="back-about"
      >
        <path
          fill="#111111"
          d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
        ></path>
      </svg>

      <div className="about-text">
        <h2>Simple background/white noise to relax or focus</h2>
        <p>
          Hey there! This was a fun personal project that I built in React
          (using create-react-app) to help people relax. Many people have worked
          on the art and music on this website so please check the credits below
          to go and support them and find similar work. Cheers!
        </p>
      </div>

      <div className="credits">
        <h4>Credits</h4>
        <p>
          Beautiful Pixel Art by
          <a href="https://1041uuu.tumblr.com/"> 1041uuu</a>
        </p>
        <p>
          Waterfall in the forest by{" "}
          <a href="https://www.youtube.com/watch?v=euEwKtP5CG4">
            The Guild of Ambience
          </a>
        </p>
        <p>
          Thunderstorm & Rain by{" "}
          <a href="https://www.youtube.com/watch?v=nDq6TstdEi8">
            Relaxing White Noise
          </a>
        </p>
        <p>
          Cafe Music by{" "}
          <a href="https://www.youtube.com/watch?v=neV3EPgvZ3g">
            Cafe Music BGM Channel
          </a>
        </p>
        <p>
          Brown Noise by{" "}
          <a href="https://www.youtube.com/watch?v=RqzGzwTY-6w">
            Jason Lewis - Mind Amend
          </a>
        </p>
        <p>
          Rainy Day by{" "}
          <a href="https://www.youtube.com/watch?v=Mr9T-943BnE">
            MeditationRelaxClub - Sleep Music & Mindfulness
          </a>
        </p>
        <p>
          Medeival Town by{" "}
          <a href="https://www.youtube.com/watch?v=ugLwYV1GSvo">
            The Guild of Ambience
          </a>
        </p>
        <p>
          Celestial Noise by{" "}
          <a href="https://www.youtube.com/watch?v=0CTEj4fbSbk">Cat Trumpet</a>
        </p>
        <p>
          Metropolis Soundscape by{" "}
          <a href="https://www.youtube.com/watch?v=Vg1mpD1BICI">
            Nomadic Ambience
          </a>
        </p>
        <p>
          Snowy Blizzard by{" "}
          <a href="https://www.youtube.com/watch?v=vz91QpgUjFc">
            Relaxing Sounds of Nature
          </a>
        </p>
        <p>
          Forest Ambience by{" "}
          <a href="https://www.youtube.com/watch?v=xNN7iTA57jM">
            The Guild of Ambience
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
