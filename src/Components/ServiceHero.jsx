import React from 'react'
import servimg from '../assets/img/portfolio-30.png'
const ServiceHero = () => {
  return (
    // <div className='d-flex justify-content-center'>
    //   <div className='conatiner-fluid' style={{maxWidth:'85%'}}>
    //       <div className='row ' style={{padding:'50px'}}>
    //           <div className='container-fluid purple rounded-4' style={{ minheight:'300px'}}>
    //                 <div className='row w-100 py-3 d-flex justify-content-center'>
    //                     <div className='col-12 col-lg-8 px-3 px-md-5' style={{textAlign:'justify'}}>
    //                     <div className='legacyheading text-center lh-sm'style={{fontFamily:'arial'}}>Comprehensive Solutions for Digital Success</div>
    //                     <br/>
    //                     <p className='fs-6 grey' style={{textAlign:'center', fontFamily:'arial'}}>Our services are strategically grouped to provide tailored solutions across <b>Marketing</b>, <b>Web/App Development</b>, <b>Designing</b> and <b>Artificial Intelligence</b> to ensure your business thrives in every digital aspect.</p>
    //                     </div>
    //                 </div>
    //           </div>
    //       </div>
    //   </div>
    // </div>

    <>
      <div className="position-relative conatiner-fluid herobg d-flex flex-column justify-content-center align-items-center" style={{minHeight:'500px'}}>
        <div className="row w-75 py-5 d-flex justify-content-center align-items-center">
            <div className="col-12 text-center py-5" >
              <h1 className='col-12 '>Vectors Digital Consultancy and Services</h1>
              <p className='col-10  mx-auto'>Our services are strategically grouped to provide tailored solutions across <b>Marketing</b>, <b>Web/App Development</b>, <b>Designing</b> and <b>Artificial Intelligence</b> to ensure your business thrives in every digital aspect.</p>
              </div>
              <img src={servimg} className=' img-fluid bottom-0 hideOnMobile' style={{width:'100%'}}/>
        </div>
        {/* <div className='row'> */}
        <div className="col-12 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="shadowUp position-absolute w-100 origin-center transform scale-110" fill="none" viewBox="0 0 2262 263" style={{left:'0', bottom:'-1'}}>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.3596C0 33.3596 870 157.138 1318 131.5C1766 105.862 2262 0 2262 0V263H0L0 33.3596Z" fill="#f0eff2"></path>
</svg>
        </div>
      {/* </div> */}
      </div>
    </>
  )
}

export default ServiceHero