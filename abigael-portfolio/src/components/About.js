// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-4">About Me</h2>
        <p className="text-lg mb-6">I am a web developer with experience in WordPress and Webflow. I've worked on a variety of projects, including a blockchain e-voting system. I am passionate about creating clean, responsive websites and am eager to improve my web designing skills.</p>
        <a href="Abigael_Karushi_Resume.pdf" download className="bg-blue-600 text-white py-2 px-4 rounded">Download My Resume</a>
      </div>
    </section>
  );
}

export default About;
