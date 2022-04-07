import React, { useState } from 'react';
import Header from './Components/Header'
import Home from './pages/Home';
import Profile from './pages/Profile';
import TrailData from './pages/TrailData';
import TrailPosts from './pages/TrailPosts';
import Travel from './pages/Travel'
// import Footer from './Footer'

export default function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
    if (currentPage === 'TrailData') {
      return <TrailData />;
    }
    if (currentPage === 'TrailPosts') {
        return <TrailPosts />;
    }
    return <Travel />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
