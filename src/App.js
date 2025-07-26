import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Course Portfolio</h1>
        <p>
          This portfolio showcases various projects and skills acquired during
          the course.
        </p>
        <p>Explore the sections below to learn more about the projects.</p>
      </header>
      <main>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <a href="/project1">Project 1: Web Development Basics</a>
            </li>
            <li>
              <a href="/project2">Project 2: React Application</a>
            </li>
            <li>
              <a href="/project3">Project 3: Full Stack Application</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
