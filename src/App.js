import React, {useEffect, useRef} from "react";
import Typed from "typed.js";
import Navbar from "./Components/Navbar";


//Todo: Add blinking cursor to subehader

function App() {

  const typedRef = useRef();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Perpetual Smiler 😁", "Continuous Learner", "Fried Chicken Enthusiast", "Problem Solver"],
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
          Food Scientist turned Software Engineer, and <span ref={typedRef}></span>
        </p>
        <p className="intro-text">
          On my free time, I like long walks on the beach as much as        coding long hours into the night-- only to realize it's passed my
          dinner time. I obsessively play puzzle games and tinker with new
          gadgets in the kitchen. I'm enthralled by the rewarding feeling of solving a logic based coding challenge. Feel free to peruse my projects (always more to come) and have fun! 🤗
        </p>
        <div className="more-links">
          {/* <a href="">More About Me</a> */}
          <a href="">View My Resume</a>
        </div>
      </section>
      <section className="projects"></section>
    </div>
  );
}

export default App;
