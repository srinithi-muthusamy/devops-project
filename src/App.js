import React from 'react';
import Header from './Header';  // Adjust the path if necessary
import Home from './Home';  // Import the Home component
import About from './About';
import Reviews from './Reviews';
import Courses from './Courses';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';  // Global styles

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />  {/* Add the Home component here */}
        <About/>
        <Reviews/>
        <Courses/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
