import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <div className='container-fluid p-5 base'>
      <div className='row logobg py-md-5 my-md-5 d-flex justify-content-center rounded-4 '>
          <div className='col-12 text-center m-3'>
              <h1>See What Our <span className='purple-font'>Client Says About Us</span></h1> 
          </div>
          <div className='col-lg-5 col-10 p-5 m-2 rounded-3 bg-light shadow-sm '>
            <h3><FontAwesomeIcon icon={faQuoteRight} /></h3>
            <p>"Partnering with this team was the best decision for our business. Our online presence skyrocketed, and our sales doubled in just six months!"</p>
            <div className='fw-bold'>John Doe</div>
            <div className='purple-font'>CEO of Elite Interiors</div>
          </div>
          <div className='col-lg-5 col-10 p-5 m-2 rounded-3 bg-light shadow-sm '>
            <h3><FontAwesomeIcon icon={faQuoteRight} /></h3>
            <p>Their design and development work exceeded our expectations. A true partner for business growth!"</p>
            <div className='fw-bold'>Jane Smith</div>
            <div className='purple-font'>Founder of Luxe Apparel</div>
          </div>
          
      </div>
    </div>
  )
}

export default Testimonials