import React from 'react'
import legacyimg from '../assets/img/legacy.jpg'

const Legacy = () => {
  return (
    <div className='base py-5 px-5'>
      <div className='container-fluid logobg py-5 my-5 rounded-4'>
      <div className='row px-3 px-md-5'>
        <div className='col-md-6 order-md-1 order-2 d-flex align-items-center pe-5'>
          {/* Wrapper div around the heading and paragraph */}
          <div className="w-100">
            <h1 className='legacyheading'>Built on Excellence, <br/>Driven by Results</h1>
            <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
            <div className="center" style={{}}>
              <button className="logobg text-fluid hideOnMobile "><a href='/services' className=' text-black text-decoration-none'>Learn more</a></button>
            </div>  
            <div className="" style={{}}>
              <button className="logobg text-fluid hideOnDesktop "><a href='/services' className=' text-black text-decoration-none'>Learn more</a></button>
            </div>  
           </div>
        </div>
        <div className='col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3 hideOnMobile'>
          <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Legacy
