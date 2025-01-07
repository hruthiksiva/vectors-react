import React, { useState } from 'react';
import logoimg from '../assets/img/logorem.png';

const Navbar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);

  // Function to toggle sidebar visibility
  const showSidebar = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    setIsSidebarVisible((prevState) => !prevState);
  };

  // Function to toggle services dropdown visibility
  const toggleServicesDropdown = () => {
    setIsServicesDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <body>
        <nav>
          {/* Sidebar menu */}
          <ul className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
            <li onClick={showSidebar}>
              <a href='/'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
              </a>
            </li>
            <li className=""><a href='/'>Home</a></li>
            <li><a href='/'>About</a></li>
            <li>
              <a href="/services"  onClick={toggleServicesDropdown}>
                Services
              </a>
              {/* Dropdown for Services */}
              {isServicesDropdownVisible && (
                <ul className="dropdown">
                  <li><a href='/marketing'>Marketing</a></li>
                  <li><a href='/design'>Design</a></li>
                  <li><a href='/web-development'>Web Development</a></li>
                  <li><a href='/ai'>AI</a></li>
                </ul>
              )}
            </li>
            <li><a href='/portfolio'>Portfolio</a></li>
            <li><a href='/contact'>Contact</a></li>
          </ul>

          {/* Main navigation */}
          <ul >
            <li className="left"><a href='/'><img src={logoimg} className='h-75'/>Vectors</a></li>
            <li className="middle ">
            <a className='hideonmobile' href='/'>Home</a>
              <a className='hideonmobile' href='/'>About</a>
              <li className="dropdown-container hideonmobile">
                {/* Services dropdown in main navigation */}
                <a href="/services" onClick={toggleServicesDropdown}>Services</a>
                {isServicesDropdownVisible && (
                  <ul className="dropdown">
                    <li><a href='/marketing'>Marketing</a></li>
                    <li><a href='/design'>Design</a></li>
                    <li><a href='/web-development'>Web Development</a></li>
                    <li><a href='/artificial-intelligence'>AI</a></li>
                  </ul>
                )}
              </li>
              <a className='hideonmobile' href='/'>Portfolio</a>
              {/* <a className='hideonmobile' href='/'>Contact</a> */}
            </li>
            <li onClick={showSidebar} className="ri8">
              <a className='hideonmobile' href='/'>Contact</a>
            </li>
            <li onClick={showSidebar} className="right">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </li>
          </ul>
        </nav>
      </body>
    </>
  );
};

export default Navbar;
