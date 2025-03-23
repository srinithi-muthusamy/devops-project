import React from 'react';
import backgroundImage from './f.jpg'; // Ensure the image path is correct

const Home = () => {
  // Inline styles
  const sectionStyle = {
    padding: '120px 0',
    backgroundColor: '#f4f4f9',
    textAlign: 'center',
    backgroundImage: `url(${backgroundImage})`, // Add background image
    backgroundSize: 'cover', // Cover the entire section
    backgroundPosition: 'center', // Center the image
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: 'black',
    maxWidth: '800px',
    margin: '0 auto 20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <section id="home" style={sectionStyle}>
      <h2 style={titleStyle}>Unlock Your Potential with Our Online Courses</h2>
      <p style={paragraphStyle}>
        Explore a vast collection of courses designed to help you expand your knowledge and skills. Whether you’re looking to advance your career or pursue a new hobby, we have something for everyone.
      </p>
      <a
        href="#courses"
        style={buttonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
      >
        Browse Courses
      </a>
    </section>
  );
};

export default Home;
