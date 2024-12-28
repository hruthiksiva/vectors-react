import React from 'react'
import storyimg from '../assets/img/ourstory.jpg'
const Story = () => {
  return (
    <div className='conatiner-fluid'>
      <div className='row' style={{padding:'50px'}}>
        <div className='container-fluid purple rounded-4' style={{ minheight:'400px'}}>
              <div className='row w-100 py-3'>
                  <div className='col-12 col-lg-6 px-3 px-md-5' style={{textAlign:'justify'}}>
                  <p className='hero-heading'>OUR STORY</p><strong className='fs-5'>From Vision to Reality</strong>
                  <br/>
                  <p className='fs-6'>Founded with the belief that every business deserves a strong digital presence, we started our journey to bridge the gap between offline excellence and online success. Today, we are proud to have empowered countless businesses to scale and thrive in the digital space.</p>
                  </div>
                  <div className='col-12 col-lg-6 text-end'>
                  <img src={storyimg} className='img-fluid rounded-4 shadow' style={{width:'600px'}}/>
                  </div>
                  
        </div>
      </div>
      </div>
      </div>
  )
}

export default Story