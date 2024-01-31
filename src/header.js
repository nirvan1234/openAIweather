import React from "react";
import './App.css';
import {Link} from "react-router-dom";



const Header = () =>(
    <div className="header">
      <div className="header_container">
        <img 
          className="header_logo"
          src="https://w7.pngwing.com/pngs/993/679/png-transparent-iphone-4s-ios-7-computer-icons-weather-weather-logo-thumbnail.png"
        />        
      </div>
    <div className="nav_item">
        <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/about'>Search</Link>
        </li>
          </ul>
        </div>
    </div>
  )

export default Header;