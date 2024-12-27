import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-light text-black px-5 shadow-sm' style={{ backgroundColor: '#0136', color: 'white', padding: '20px 0' }}>
      <div className='container-fluid lh-lg px-5'>
        <div className='row'>
          <div className='col-12 col-md-4 py-4'>
            <img alt="" /> <strong>Vectors</strong>
          </div>

          <div className='col-12 col-md-4 py-4'>
            <strong>Explore</strong><br />
            <a href="/" className="footer-link">Home</a><br />
            <a href="/services" className="footer-link">Services</a><br />
            <a href="/portfolio" className="footer-link">Portfolio</a><br />
            <a href="/about" className="footer-link">About</a><br />
            <a href="/contact" className="footer-link">Contact</a><br />
          </div>

          <div className='col-12 col-md-4 py-4 align-middle'>
            <strong>Contact</strong><br />
            <a href="mailto:email@example.com" className="footer-link">example@gmail.com</a><br />
            <a href="tel:+123456789" className="footer-link">+1 234 567 890</a><br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
