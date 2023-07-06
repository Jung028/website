import React from 'react';
import '../Styles/Home.css'


const Home = () => {
  return (
    <div className="home-container">
      <div className="section1">

        <h2>Welcome to My Portfolio</h2>
          <p>
            Hello! I'm John Doe, a passionate software engineer with experience in building
            IOS Apps, Image recog models and many more.
          </p>

      </div>

      <div className="section2">
        <div className='skills-container'>
          <h2>Skills</h2>
          <h3>Web Development</h3>
          <p>
            HTML, CSS, JavaScript, jQuery, Bootstrap, ReactJS, Material UI, Drupal, Wordpress, Fireba
          </p>
          <h3>Data Science</h3>
          <p>
            Python, Streamlit, Microsoft Excel, MySQL, Numpy, Pandas, Matplotlib, Scikit-learn
          </p>
          <h3>Languages</h3>
          <p>
            C, Python, Java, Javascript, Typescript, SQL
          </p>
          <h3>Others</h3>
          <p>
            Git, Google Analytics, Figma, Canva, Microsoft Office
          </p>
        </div>
      </div>    

      <div className="section3">
       <h2>Welcome to My Portfolio</h2>
         <p>
           Hello! I'm John Doe, a passionate web developer with experience in building
           modern and responsive web applications.
         </p>
     </div>    


    </div>
  );
};

export default Home;
