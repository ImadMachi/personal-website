import React from "react";
import Works from "./Works";

const About = () => {
  return (
    <main className="main">
      <img
        className="main__personal-image"
        src="./images/imad_machi.jpg"
        alt=""
      />
      <div className="main__biography">
        <h3>Imad MACHI</h3>
        <p>
          Imad MACHI is a front-end developer, he builds responsive websites
          using React&redux, css and other front-end technologies.
        </p>
        <p>
          He is learning programming on his own, and focusing on new
          technologies and last versions of the old ones.
        </p>
        <p>
          Besides web thechnologies, Imad learns also algorithms and data
          structures, and frequently practicing problems-solving challenge.
        </p>
      </div>
      <div className="main__works">
        <h2 className="main__works__title">Some of my works</h2>
        <Works />
      </div>
    </main>
  );
};

export { About as default };
