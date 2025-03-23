import React from 'react';
import './Courses.css'; // Import the CSS file for other styles
import backgroundImage from './c.jpg'; // Import the background image

const Courses = () => {
  // Define the inline style for the background image
  const sectionStyle = {
    padding: '60px 0',
    backgroundImage: `url(${backgroundImage})`, // Use the imported image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section id="courses" className="courses" style={sectionStyle}>
      <div className="container">
        <h2 className="section-title">Featured Courses</h2>
        <div className="course-grid">
          <div className="course-card">
            <h3>Introduction to Programming</h3>
            <p>Learn the basics of programming with hands-on projects and expert guidance.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
          <div className="course-card">
            <h3>Advanced Data Science</h3>
            <p>Dive deep into data science with advanced techniques and real-world applications.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
          <div className="course-card">
            <h3>Digital Marketing Strategies</h3>
            <p>Master the latest digital marketing strategies to boost your business.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
          <div className="course-card">
            <h3>Web Development Bootcamp</h3>
            <p>Build robust and dynamic websites using modern web technologies.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
          <div className="course-card">
            <h3>Machine Learning Basics</h3>
            <p>Get started with machine learning and explore various algorithms and applications.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
          <div className="course-card">
            <h3>UI/UX Design Fundamentals</h3>
            <p>Learn the principles of user interface and user experience design to create engaging digital products.</p>
            <a href="#" className="apply-button">Apply Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
