import React from 'react';
import '../styles/Home.css';

const styles = {
    headerStyle: {
      background: 'white',
    },
    headingStyle: {
      fontSize: '100px',
    },
  };
  
  // We use JSX curly braces to evaluate the style object
  
  function Home() {
    return (
      <header style={styles.headerStyle} className="home">
        <h1 style={styles.headingStyle}>Social Trails</h1>
      </header>
    );
  }
  

export default Home;