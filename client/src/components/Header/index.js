import React from 'react';
import '../../index.css';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

function Header () {
    return (

      <nav className="navbar customNav fixed-top">

      <div className="container-fluid">
        <a className=" whiteFont customHeaderTitle align-self-center" href="#">Social Trails</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="whiteFont customMenuIcon"><Icon icon="ant-design:menu-outlined" /></span>
        </button>
        
        

        <div className="offcanvas offcanvas-end customSideNav" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <h5 className="offcanvas-title customHeaderTitle" id="offcanvasNavbarLabel">Social Trails</h5>
            <button type="button" className="btn-close whiteFont" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li className="nav-item">
                <Link className="nav-link whiteFont customNavLink customNavLinkText" aria-current="page" to={"/"}
                >Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/profile"}
                >Profile</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/traildata"}
                >Trail Data</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/trailsposts"}
                >Trail Posts</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/travel"}
                >Travel</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/signup"}
                >Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/travel"}
                >Log In</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link whiteFont customNavLink customNavLinkText' aria-current="page" to={"/travel"}
                >Log Out</Link>
              </li>

            </ul>

          </div>

        </div>

      </div>
      </nav>
);
}

export default Header;
