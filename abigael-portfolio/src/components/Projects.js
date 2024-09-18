// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl mb-4">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-200 p-4 rounded shadow">
            <h3 className="text-xl mb-2">Blockchain E-Voting System</h3>
            <p className="mb-4">A secure e-voting system built for school elections using blockchain technology.</p>
            <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded">View Project</a>
          </div>
          {/* Add more projects here */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
