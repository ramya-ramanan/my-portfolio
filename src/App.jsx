import React from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';



function App() {
  return(
    <>
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    
    </div>
     

    </>
  );
}
export default App; 
