import React from 'react'
import Legacy from './Legacy'
import legacyimg from '../assets/img/portfolio-14.png'

const Services = () => {
  return (
    <>
       <div className='container-fluid py-5 my-5 bg-dark text-white'>
            <div className='row px-5'>
              <h1 className='pb-5' style={{fontSize:'', fontFamily:'arial'}}><span style={{color:'#ffe6ca'}}>Services</span> We Provide</h1>
            </div>
           <div className='row px-5 py-3'>
             <div className='col-md-6 order-md-1 order-2 pe-5'>
               {/* Wrapper div around the heading and paragraph */}
               <div className="w-100">
                 <h1 className='legacyheading'>Marketing</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>
           
           <div className='row px-5 py-3'>
             <div className='col-md-6 order-md-1 order-2 pe-5'>
               {/* Wrapper div around the heading and paragraph */}
               <div className="w-100">
                 <h1 className='legacyheading'>Design</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>

           <div className='row px-5 py-3'>
             <div className='col-md-6 order-md-1 order-2 pe-5'>
               {/* Wrapper div around the heading and paragraph */}
               <div className="w-100">
                 <h1 className='legacyheading'>Web devleopement</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>
         </div>
    </>
  )
}

export default Services
