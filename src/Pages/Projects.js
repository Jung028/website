import React from 'react';
import '../Styles/Projects.css';
import bunnies from '../Media/bunnies.jpeg';
import omg from '../Media/omg.jpeg';
import '../Styles/Home.css';



const Projects = () => {
  return (
    <div className='Projects'>

      <div className="section3">
        <h2>Projects</h2>
        <a href="https://github.com/Jung028" target="_blank" rel="noopener noreferrer">Visit my GitHub profile</a>

          <p>
            Hello! I'm John Doe, a passionate web developer with experience in building
            modern and responsive web applications.
          </p>
      </div>    

      <div class="column-container">
        <div class="column">
          <div class="image">
          <img src={bunnies} alt="Project"/>
          </div>
          <div class="content">
            <h3>Library Management Project</h3>
            <p>Description : The Library Management Project is a scala web application that automates 
              library operations, allowing administrators to manage student records, books, categories, 
              issue books, and feedback. It provides students with features like book issuance, feedback 
              submission, and access to their details.
            </p>
            <br></br>
            <a href="https://github.com/Jung028" class="view-project-btn">View Project</a>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Projects;
