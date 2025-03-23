import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()}  E-Learning Platforms. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
