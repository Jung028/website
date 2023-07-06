import React from 'react';
import '../Styles/Experience.css';


const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="section-heading">Experience</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Bachelors of Computer Science</h3>
            <p>Sunway-Lancaster Dual Degree Programme</p>
            <p>Jan 2022 - Present</p>
            <ul>
              <li>Expected graduation - Jan 2025</li>
              <li>Currently a second year student pursuing a degree in Computer Science at Sunway University.</li>
              <li>Sunway Clubs : Sunway Tech Club</li>
              <li>External Clubs : DSA Swim Team, Sponsored athlete of Team TIME Triathlon </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Sunway College</h3>
            <p>FIA (Foundation In Arts)</p>
            <p>Jan 2021 - Dec 2021</p>
            <ul>
              <li>Clubs and Societies : Sunway Tech Club</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-item-content">
            <h3>Company DEF</h3>
            <p>Junior Developer</p>
            <p>2016 - 2017</p>
            <ul>
              <li>Assisted senior developers in building and testing software components.</li>
              <li>Gained practical experience in Agile software development methodologies.</li>
              <li>Contributed to bug fixes and performed code refactoring tasks.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;
