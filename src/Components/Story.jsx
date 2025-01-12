import React from 'react'
import storyimg from '../assets/img/ourstory.jpg'
const Story = () => {
  return (
      
      <>
      <div className='d-flex justify-content-center about-hero text-white py-5 position-relative d-flex align-items-center' style={{minHeight:'800px'}}>
      <div className='conatiner-fluid py-5 '>
          <div className='row ' >
              <div className='container-fluid rounded-4' style={{ minheight:'300px'}}>
                    <div className='row w-100 py-3 d-flex justify-content-center'>
                        <div className='col-10 col-lg-8 px-3' style={{textAlign:'justify'}}>
                        <div className='hero-heading text-center lh-sm'style={{fontFamily:'arial'}}> OUR STORY</div>
                        <br/>
                        <p className=' heropara' style={{textAlign:'center', fontFamily:'arial'}}> Founded with the belief that every business deserves a strong digital presence, we started our journey to bridge the gap between offline excellence and online success. Today, we are proud to have empowered countless businesses to scale and thrive in the digital space.</p>
                        </div>
                    </div>
              </div>
          </div>
          <div className="col-12 ">
          <svg className=" position-absolute bottom-0 shadow-up " viewBox="0 0 1441 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1163.18 0 C 1321.14 0.3606 1441 37.4609 1441 37.4609 V 110 H 0 V 64 C 0 64 98.1133 111.005 370.92 101.368 C 509.977 96.4553 614.314 74.8108 720.361 52.8115 C 845.588 26.8334 973.201 0 1163.18 0 Z" fill="#f0eff2"></path>
          </svg>
         </div>
    </div>
    </div>


      </>

    // <div className='conatiner-fluid'>
    //   <div className='row' style={{padding:'50px'}}>
    //     <div className='container-fluid purple rounded-4' style={{ minheight:'400px'}}>
    //           <div className='row w-100 py-3'>
    //               <div className='col-12 col-lg-6 px-3 px-md-5' style={{textAlign:'justify'}}>
    //               <p className='hero-heading'>OUR STORY</p><strong className='fs-5'>From Vision to Reality</strong>
    //               <br/>
    //               <p className='fs-6'>Founded with the belief that every business deserves a strong digital presence, we started our journey to bridge the gap between offline excellence and online success. Today, we are proud to have empowered countless businesses to scale and thrive in the digital space.</p>
    //               </div>
    //               <div className='col-12 col-lg-6 text-end'>
    //               <img src={storyimg} className='img-fluid rounded-4 shadow' style={{width:'600px'}}/>
    //               </div>
                  
    //     </div>
    //   </div>
    //   </div>
    //   </div>
  )
}

export default Story