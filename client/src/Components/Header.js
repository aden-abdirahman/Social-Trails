import React from 'react';
import '../index.css'
import { Link } from "react-router-dom";

function Header () {
    return (

      <nav className="navbar navbar-light bg-light fixed-top">

      <div className="container-fluid">
        <a className="navbar-brand" href="#">Offcanvas navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="btn" aria-current="page" to={"/"}
                >Home</Link>
              </li>
              {/* <li className="nav-item">
                <Link className={currentPage === 'Profile' ? 
                'nav-link active' : 'nav-link'} aria-current="page" to={"/profile"}
                >Profile</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPage === 'Trail Data' ? 
                'nav-link active' : 'nav-link'} aria-current="page" to={"/traildata"}
                >Trail Data</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPage === 'Trails Posts' ? 
                'nav-link active' : 'nav-link'} aria-current="page" to={"/trailsposts"}
                >Trail Posts</Link>
              </li>
              <li className="nav-item">
                <Link className={currentPage === 'Travel' ? 
                'nav-link active' : 'nav-link'} aria-current="page" to={"/travel"}
                >Travel</Link>
              </li> */}

            </ul>

          </div>

        </div>

      </div>
      </nav>
);
}

export default Header;

