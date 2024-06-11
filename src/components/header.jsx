import "./header.css";

import  { useState } from "react";

// import React from 'react';

const Header = () => {


  
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">CodeJr10</a>

        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a href="#home" className="nav_link active">
                <i className="uil uil-home nav_icon"></i>Home
              </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil uil- nav_icon"></i>
              Skills</a>
            </li>

              <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil uil- nav_icon"></i>
              Skills</a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil uil- nav_icon"></i>
             Github </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <i className="uil uil- nav_icon"></i>
             LeetCode </a>
            </li>

            <li className="nav_item">
              <a href="" className="nav_link">
                <box-icon type='logo' name='linkedin'></box-icon>LinkedIn
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav_close" onClick={() => showMenu (!Toggle)}></i>

          <div className="nav_toggle" onClick={() => showMenu (!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
