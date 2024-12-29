import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <div className='container-fluid pt-5 purple'>
      <div className='row py-md-5 my-dm-5'>
      <div className='row text-center'>
      <h1>See What Our <span className='purple-font'>Client Says About Us</span></h1> 
      </div>
      <div className='row'>
      <div className='col p-5 m-5 rounded-3 bg-light shadow-sm '>
        <h3><FontAwesomeIcon icon={faQuoteRight} /></h3>
        <p>"Partnering with this team was the best decision for our business. Our online presence skyrocketed, and our sales doubled in just six months!"</p>
        <div className='fw-bold'>John Doe</div>
        <div className='purple-font'>CEO of Elite Interiors</div>
      </div>
      <div className='col p-5 m-5 rounded-3 bg-light shadow-sm '>
        <h3><FontAwesomeIcon icon={faQuoteRight} /></h3>
        <p>Their design and development work exceeded our expectations. A true partner for business growth!"</p>
        <div className='fw-bold'>Jane Smith</div>
        <div className='purple-font'>Founder of Luxe Apparel</div>
      </div>
      </div>

      </div>
    </div>
  )
}

export default Testimonials