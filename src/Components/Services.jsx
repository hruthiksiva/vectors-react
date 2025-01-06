import React from 'react'
import Legacy from './Legacy'
import legacyimg from '../assets/img/portfolio-14.png'

const Services = () => {
  return (
    <>
    <div className="container-fluid base py-5">
      <div className="row px-3 d-flex justify-content-center">
        <div className="col-12 col-lg-3  rounded-4 border border-secondary my-5 mx-3 p-4  porange" style={{minHeight:'350px',width: '21rem'}}>
          <a href='/marketing' className='text-decoration-none text-black'>
          <h1>Marketing</h1>
          <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
          </a>
        </div>

        <div className="col-12 col-lg-3  rounded-4 border border-secondary my-5 mx-3 p-4  pgreen" style={{minHeight:'350px',width: '21rem'}}>
        <a href='/design' className='text-decoration-none text-black'>
        <h1>Design</h1>
        <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
          </a>
        </div>

        <div className="col-12 col-lg-3  rounded-4 border border-secondary my-5 mx-3 p-4  pblue" style={{minHeight:'350px',width: '21rem'}}>
        <a href='/web-development' className='text-decoration-none text-black'>
          <h1>Web Development</h1>
          <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
          </a>
        </div>

        <div className="col-12 col-lg-3  rounded-4 border border-secondary my-5 mx-3 p-4  plightgreen" style={{minHeight:'350px',width: '21rem'}}>
        <a href='/artificial-intelligence' className='text-decoration-none text-black'>
          <h1>AI assitance</h1>
          <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
          </a>
        </div>
      </div>
    </div>
    


    {/* VERSION 1 (bg-dark) */}
       {/* <div className='container-fluid py-5 my-5 bg-dark text-white'>
            <div className='row px-5'>
              <h1 className='pb-5' style={{fontSize:'', fontFamily:'arial'}}><span style={{col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 or:'#ffe6ca'}}>Services</span> We Provide</h1>
            </div>
           <div className='row px-5 py-3'>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 order-md-1 order-2 pe-5'>
               
               <div className="w-100">
                 <h1 className='legacyheading'>Marketing</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>
           
           <div className='row px-5 py-3'>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 order-md-1 order-2 pe-5'>
               <div className="w-100">
                 <h1 className='legacyheading'>Design</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>

           <div className='row px-5 py-3'>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 order-md-1 order-2 pe-5'>
               <div className="w-100">
                 <h1 className='legacyheading'>Web devleopement</h1>
                 <p>With a legacy of delivering exceptional digital experiences, our team of experts combines creativity, technology, and strategy to help premium businesses dominate the online space. Our commitment to quality, precision, and scalability sets us apart.</p>
               </div>
             </div>
             <div className='col col-md-3 rounded-4 border border-secondary my-5 mx-3 p-4 -md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3'>
               <img src={legacyimg} alt='legacy image' className='rounded-3' style={{ width: '100%' }} />
             </div>
           </div>
         </div> */}
    </>
  )
}

export default Services
