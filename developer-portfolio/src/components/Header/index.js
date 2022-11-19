import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

function Portfolio () {
  // state of current page
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    // switch statement that returns the appropriate component of the 'currentPage'
  switch(currentPage) {
    case "about":
      return <About></About>
      case"contact":
      return <Contact></Contact>
      case "portfolio":
      return <Projects></Projects>
      default:
        return <About></About>
  }
  };

  return (
    <div>
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
      {/* {
        // Render the component returned by 'renderPage()'
        renderPage()
      } */}
      <Contact></Contact>
    </div>
    </div>
  );
}

export default Portfolio;

