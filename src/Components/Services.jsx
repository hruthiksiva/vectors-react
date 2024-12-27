import React from 'react'

const Services = () => {
  return (
    <div className='container-fluid bg-light'>
      {/* Design */}
      <div className='row'>
        <div className='col-12 col-md-4 px-5 mb-3 mb-md-0 purple d-flex align-items-center'>
          <h1>Design</h1>
        </div>
        <div className='col-12 col-md-8'>
          <div className='row py-5'>
            <div className='col px-5 '>
              <h3>UI/UX Design</h3>
              <p>Intuitive, user-centric designs that leave a lasting impact.</p>
            </div>
            <div className='col px-5'>
              <h3>Logo Design</h3>
              <p>Memorable brand identities that stand out in crowded markets.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Web Development */}
      <div className='row '>
        <div className='col-12 col-md-4'>
          <div className='row'>
            <div className='col-12 px-5 py-5 order-2'>
              <p>Fast, responsive, and scalable websites tailored for your business goals.</p>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-8 px-5 mb-3 mb-md-0 purple d-flex align-items-center order-1'>
          <h1>Web Development</h1>
        </div>
      </div>

      {/* Marketing */}
      <div className='row'>
        <div className='col-12 col-md-4 px-5 mb-3 mb-md-0 purple d-flex align-items-center'>
          <h1>Marketing</h1>
        </div>
        <div className='col-12 col-md-8'>
          <div className='row py-5'>
            <div className='col px-5 '>
              <h3>Digital Marketing</h3>
              <p>Data-driven campaigns to enhance visibility and drive conversions</p>
            </div>
            <div className='col px-5'>
              <h3>End-to-End Business Solutions</h3>
              <p>Comprehensive strategies to streamline your digital transformation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI */}
       <div className='row '>
        <div className='col-12 col-md-4'>
          <div className='row'>
            <div className='col px-5 py-5 order-2'>
            <h3>ChatBot</h3>
              <p>Build Powerful Chatbots to remove</p>
            </div>
            <div className='col px-5 py-5 order-2'>
            <h3>Data Analytics Tools</h3>
              <p>Build Powerful Chatbots to remove</p>
            </div>
            
          </div>
        </div>
        <div className='col-12 col-md-8 px-5 mb-3 mb-md-0 purple d-flex align-items-center order-1'>
          <h1>Arificial Intelligence</h1>
        </div>
      </div>
    </div>
  )
}

export default Services
