import React from 'react';

const Hero = () => {
  return (
    <>
    <div className='container-fluid purple'>
        <div 
          className='col-md-10 mx-auto px-5 py-5 my-auto'
          style={{zIndex:'2px'}}
        >
          <h1 className='mb-3 hero-heading text-center' style={{textTransform: 'uppercase'}}>Empowering Businesses to Thrive in the Digital Era</h1>
          <p className='fw-light heropara'style={{ textAlign: 'center' ,fontFamily:''}}>
            Transform your offline business into an unstoppable online force. 
            From cutting-edge web development and innovative UI/UX design to 
            powerful marketing strategies, we deliver premium end-to-end solutions 
            tailored for exponential growth.
          </p>
        </div>
    </div>    
    </>
  );
};

export default Hero;
