import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Particles } from "./components/Particles";
import ShootingStars from "./components/ShootingStars";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <main className="relative w-full min-h-screen">
      {/* Global Background */}
      <div className="fixed inset-0 z-[-10]">
        <Particles
          className="absolute inset-0"
          quantity={120}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <ShootingStars />
      </div>

      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </div>
      <Analytics />
    </main>
  );
};

export default App;
