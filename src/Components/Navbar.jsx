import React from 'react';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid px-5 py-2 shadow-sm bg-light ">
      <div className="row px-5">
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <a className="navbar-brand" href="#">
          <img alt="" style={{ height: '40px' }} />Vectors
        </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item px-md-3">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item px-md-3">
                <a className="nav-link" aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item px-md-3">
                <a className="nav-link" aria-current="page" href="#">Portfolio</a>
              </li>
              <li className="nav-item px-md-3">
                <a className="nav-link" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item px-md-3">
                <a className="nav-link" aria-current="page" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    <hr className='m-0 mb-5' style={{opacity:'10%'}}/>
    </>
  );
};

export default Navbar;
