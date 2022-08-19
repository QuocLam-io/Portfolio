import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Navbar from "./Components/Navbar";

function App() {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Perpetual Smiler 😁",
        "Continuous Learner",
        "Fried Chicken Enthusiast",
        "Problem Solver",
        "Occassional Jogger",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="App">
      <div className="background">
        <img className="wave3" src="../Imgs/wave3.png" alt="Wave 3" />
        <img className="wave2" src="../Imgs/wave2.png" alt="Wave 2" />
        <img className="wave1" src="../Imgs/wave1.png" alt="Wave 1" />
      </div>
      <Navbar />
      <section className="intro">
        <p className="intro-header">Hi I'm Quoc, welcome to my page! 👋🏼</p>
        <p className="intro-subheader">
          Food Scientist turned Software Engineer, and{" "}
          <span className="cursed-blinker" ref={typedRef}></span>
        </p>
        <p className="intro-text">
          On my free time, I like long walks on the beach as much as coding long
          hours into the night-- only to realize it's passed my dinner time. I
          obsessively play puzzle games and tinker with new gadgets in the
          kitchen. I'm enthralled by the rewarding feeling of solving a logic
          based coding challenge. Feel free to peruse my projects (always more
          to come) and have fun! 🤗
        </p>
        <div className="more-links">
          {/* <a href="">More About Me</a> */}
          <a
            href="https://drive.google.com/file/d/12yQUTmYFx7uOEnvHbTIa49nWXuOQiGTD/view?usp=sharing"
            target="#"
          >
            View My Resume
          </a>
        </div>
      </section>
      <section className="projects">
        <header className="project-header">
          <p>My Projects</p>
          <img src="../Imgs/chip-html.png" alt="html chip" />
          <img src="../Imgs/chip-css.png" alt="html chip" />
          <img src="../Imgs/chip-js.png" alt="html chip" />
        </header>
        <div className="projects-body">
          <a href="">
            <img src="../Imgs/card-astroboi.svg" alt="" srcset="" />
          </a>
          <a href="https://macro-daddy.netlify.app/">
            <img src="../Imgs/card-macrodaddy.svg" alt="" srcset="" />
          </a>
          <a href="">
            <img src="../Imgs/card-positiveplace.svg" alt="" srcset="" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
