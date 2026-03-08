// import React from "react";

import "./App.css";

import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Hero />
      </main>
      <main className=" bg-white">
        <About />
      </main>
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
