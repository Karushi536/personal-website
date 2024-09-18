// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl mb-4">Hi, I'm Abigael Karushi</h2>
        <p className="text-xl mb-6">Web Developer specializing in WordPress and Webflow</p>
        <a href="#projects" className="bg-white text-blue-600 py-2 px-4 rounded">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
