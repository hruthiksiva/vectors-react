import React from 'react'

const ServiceHero = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className='conatiner-fluid' style={{maxWidth:'85%'}}>
          <div className='row ' style={{padding:'50px'}}>
              <div className='container-fluid purple rounded-4' style={{ minheight:'300px'}}>
                    <div className='row w-100 py-3 d-flex justify-content-center'>
                        <div className='col-12 col-lg-8 px-3 px-md-5' style={{textAlign:'justify'}}>
                        <div className='legacyheading text-center lh-sm'style={{fontFamily:'arial'}}>Comprehensive Solutions for Digital Success</div>
                        <br/>
                        <p className='fs-6 grey' style={{textAlign:'center', fontFamily:'arial'}}>Our services are strategically grouped to provide tailored solutions across <b>Marketing</b>, <b>Web/App Development</b>, <b>Designing</b> and <b>Artificial Intelligence</b> to ensure your business thrives in every digital aspect.</p>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ServiceHero