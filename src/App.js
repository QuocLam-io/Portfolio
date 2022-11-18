import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";

function App() {
  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Fried Chicken Enthusiast",
        "Continuous Learner",
        "Problem Solver",
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
        <p className="intro-header">Hi all, welcome to my page! 👋🏼</p>
        <p className="intro-subheader">
          Food Scientist turned Software Engineer, and{" "}
          <span className="cursed-blinker" ref={typedRef}></span>
        </p>
        <p className="intro-text">
        I’m a software engineer motivated to improve the quality of interaction between human and tech. While developing software, it’s important for me to bridge functionality, along with intuitive design. Any problem encountered, I face as a challenge that can be resolved with enough determination and curiosity.
        </p>
        <div className="more-links">
          {/* <a href="">More About Me</a> */}
          <a
            href="https://drive.google.com/file/d/1_ur1xg3VHw4iZPcHyUyVGl9iWJXBZU-z/view?usp=sharing"
            target="#"
          >
            View My Resume
          </a>
          <p>|</p>
          <a href="https://github.com/QuocLam-io" target="#">
            Github
          </a>
          <p>|</p>
          <a href="https://www.linkedin.com/in/lam-quoc/" target="#">
            LinkedIn
          </a>
        </div>
      </section>
      <section className="projects">
        <header className="project-header">
          <p>My Projects</p>
          <motion.div className="icon" whileHover={{ scale: 1.1 }}>
            <img src="./Imgs/icon-html.png" alt="" srcset="" />
            <p>HTML</p>
          </motion.div>
          <motion.div className="icon" whileHover={{ scale: 1.1 }}>
            <img src="./Imgs/icon-css.png" alt="" srcset="" />
            <p>CSS</p>
          </motion.div>
          <motion.div className="icon" whileHover={{ scale: 1.1 }}>
            <img src="./Imgs/icon-js.png" alt="" srcset="" />
            <p>JS</p>
          </motion.div>
        </header>
        <div className="projects-body">
          <a target="#" href="https://astro-boy.netlify.app/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="../Imgs/card-astroboi.svg"
              alt=""
              srcset=""
            />
          </a>
          <a target="#" href="https://macro-daddy.netlify.app/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="../Imgs/card-macrodaddy.svg"
              alt=""
              srcset=""
            />
          </a>
          {/* <a target="#" href="http://greasy-spoon.netlify.app/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="../Imgs/card-greasyspoon.svg"
              alt=""
              srcset=""
            />
          </a> */}
          <a target="#" href="https://positive-place.netlify.app/">
            <motion.img
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              src="../Imgs/card-positiveplace.svg"
              alt=""
              srcset=""
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
