import React from 'react';
import '../styles/Home.css';

  
  // We use JSX curly braces to evaluate the style object
  
  function Home() {
    return (
      <main>
          <header className="home">
            {/* <h1>Social Trails</h1> */}
          </header>
          <section className='homeSection'>
            <h3>Welcome to Social Trails, the social platform for those with a hunger for adventure!</h3>
            <div className='homeNav'>
           <h4>
             Tell Us Where You Want To Go
           </h4>
            <div className='buttonDiv'>
            <button className='homeButtons' href="/Trips">Trips</button>
            <button className='homeButtons' href="/TrailPosts">Trails</button>
            </div>
            </div>
          </section>

      </main>
      
    );
  }
  

export default Home;