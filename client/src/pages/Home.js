import React from 'react';
import '../styles/Home.css';

  
  // We use JSX curly braces to evaluate the style object
  
  function Home() {
    return (
      <main>
          <header className="home">
            <h1>Social Trails</h1>
          

          <section>
            <h3>Where Would You Like To Go</h3>
            <button href="/Travel">Travel</button>
            <button href="/TrailPosts">Trails</button>
          </section>
          </header>

      </main>
      
    );
  }
  

export default Home;