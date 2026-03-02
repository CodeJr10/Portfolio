// import React from "react";
import "./App.css";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

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
      <Contact />
      < Projects />
    </div>
  );
};

export default App;
