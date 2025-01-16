import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../assets/img/logorem.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid mx-5 px-5">
        <Link className="navbar-brand" to="/">
          <img src={logoimg} className="img-fluid" style={{ maxHeight: '45px' }} /> Vectors
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link mx-2" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/about">About</Link>
            </li>
            <li
              className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="nav-link mx-2 dropdown-toggle"
                to="/services"
                role="button"
                aria-expanded={dropdownOpen ? 'true' : 'false'}
              >
                Services
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/marketing">Marketing</Link></li>
                <li><Link className="dropdown-item" to="/artificial-intelligence">Artificial Intelligence</Link></li>
                <li><Link className="dropdown-item" to="/design">Design</Link></li>
                <li><Link className="dropdown-item" to="/web-development">Web Development</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to="/contact" className="btn btn-outline-success">Contact</Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import logoimg from '../assets/img/logorem.png';

// const Navbar = () => {
//   const [isServicesDropdownVisible, setIsServicesDropdownVisible] = useState(false);
//   const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

//   // Function to show the services dropdown
//   const handleMouseEnter = () => {
//     setIsServicesDropdownVisible(true);
//   };

//   // Function to hide the services dropdown
//   const handleMouseLeave = () => {
//     setIsServicesDropdownVisible(false);
//   };

//   // Toggle mobile menu
//   const toggleMobileMenu = () => {
//     setIsMobileMenuVisible((prevState) => !prevState);
//   };

//   return (
//     <>
//       <body>
//         <nav>
//           {/* Sidebar menu */}
//           <ul className={`sidebar`}>
//             <li><a href='/'>Home</a></li>
//             <li><a href='/'>About</a></li>
//             <li
//               onMouseEnter={handleMouseEnter}
//               onMouseLeave={handleMouseLeave}
//             >
//               <a href="/services">
//                 Services
//               </a>
//               {/* Dropdown for Services */}
//               {isServicesDropdownVisible && (
//                 <ul className="dropdown">
//                   <li><a href='/marketing'>Marketing</a></li>
//                   <li><a href='/design'>Design</a></li>
//                   <li><a href='/web-development'>Web Development</a></li>
//                   <li><a href='/ai'>AI</a></li>
//                 </ul>
//               )}
//             </li>
//             <li><a href='/portfolio'>Portfolio</a></li>
//             <li><a href='/contact'>Contact</a></li>
//           </ul>

//           {/* Main navigation */}
//           <ul>
//             <li className="left">
//               <a href='/'>
//                 <img src={logoimg} className='h-75' alt="Logo" />
//                 Vectors
//               </a>
//             </li>
//             <li className="middle">
//               <a className='hideonmobile' href='/'>Home</a>
//               <a className='hideonmobile' href='/about'>About</a>
//               <li
//                 className="dropdown-container hideonmobile"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 {/* Services dropdown in main navigation */}
//                 <a href="/services">Services</a>
//                 {isServicesDropdownVisible && (
//                   <ul className="dropdown">
//                     <li><a href='/marketing'>Marketing</a></li>
//                     <li><a href='/design'>Design</a></li>
//                     <li><a href='/web-development'>Web Development</a></li>
//                     <li><a href='/artificial-intelligence'>AI</a></li>
//                   </ul>
//                 )}
//               </li>
//               <a className='hideonmobile' href='/portfolio'>Portfolio</a>
//             </li>
//             <li className="ri8">
//               <a className='hideonmobile' href='/contact'>Contact</a>
//             </li>
//             <li className="right" onClick={toggleMobileMenu}>
//               <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black">
//                 <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
//               </svg>
//             </li>
//           </ul>
//         </nav>

//         {/* Mobile Menu */}
//         {isMobileMenuVisible && (
//           <ul className="mobile-menu">
//             <li><a href='/'>Home</a></li>
//             <li><a href='/about'>About</a></li>
//             <li><a href='/services'>Services</a></li>
//             <li><a href='/portfolio'>Portfolio</a></li>
//             <li><a href='/contact'>Contact</a></li>
//           </ul>
//         )}
//       </body>
//     </>
//   );
// };

// export default Navbar;
