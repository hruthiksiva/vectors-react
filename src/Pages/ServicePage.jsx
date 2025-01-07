import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import webdimg from '../assets/img/portfolio-14.png'
import markimg from '../assets/img/portfolio-13.png'
import desimg from '../assets/img/portfolio-10.png'

import Services from '../Components/Services.jsx'
const ServicePage = () => {
  return (
    <>
      <ServiceHero />
      {/* <ServiceCards/> */}
      <Services/>
      {/* Service Legacy */}

      {/* Marketing Services Section */}
      <div className='base py-5 mb-0 base'>
      <div className="container-fluid py-5 my-5 px-5">
        <div className="row px-5 d-flex justify-content-center align-items-center herobg py-5 rounded-5">
          <div className="col-md-6 order-md-1 order-2 d-flex align-items-center pe-5">
            <div className="w-100">
              <h1 className="legacyheading">Marketing Services</h1>
              <p>Boost your business visibility and engagement with our tailored marketing solutions.</p>
              <ul>
                <li><strong>Social Media Marketing:</strong> Build a strong online presence with engaging campaigns across platforms.</li>
                <li><strong>SEO Optimization:</strong> Improve search engine rankings and increase organic visibility.</li>
                <li><strong>Online Ad Marketing:</strong> Run targeted ad campaigns for maximum ROI and lead generation.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3">
            <img src={markimg} alt="Marketing Image" className=" img-fluid rounded-3 mx-auto" style={{ }} />
          </div>
        </div>
      </div>

      {/* Web/App Development Services Section */}
      <div className="container-fluid py-5 my-5 px-5">
        <div className="row px-5 d-flex justify-content-center align-items-center herobg py-5 rounded-5">
        <div className="col-md-6 text-md-end text-center mb-md-0 mb-3 order-1 order-md-2">
            <img src={webdimg} alt="Web/App Development Image" className="rounded-3 mx-auto" style={{ width: '100%' }} />
          </div>
          <div className="col-md-6 d-flex align-items-center pe-5 order-2 order-md-1">
            <div className="w-100">
              <h1 className="legacyheading">Web/App Development Services</h1>
              <p>We create digital experiences that are secure, fast, and fully aligned with your business goals.</p>
              <ul>
                <li><strong>Web Development:</strong> Create fast, secure, and responsive websites aligned with your business goals.</li>
                <li><strong>E-Commerce Website:</strong> Develop seamless online shopping platforms optimized for conversions.</li>
                <li><strong>App Development:</strong> Build user-friendly mobile applications for both iOS and Android.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Designing Services Section */}
      <div className="container-fluid py-5 my-5 px-5">
        <div className="row px-5 d-flex justify-content-center align-items-center herobg py-5 rounded-5">
          <div className="col-md-6 order-md-1 order-2 d-flex align-items-center pe-5">
            <div className="w-100">
              <h1 className="legacyheading">Designing Services</h1>
              <p>Our design team specializes in creating visually stunning, user-centric digital experiences.</p>
              <ul>
                <li><strong>UI/UX Design (Website):</strong> Enhance user experience with visually appealing and functional designs.</li>
                <li><strong>Branding Design:</strong> Create cohesive brand identities that resonate with your audience.</li>
                <li><strong>Logo & Poster Design:</strong> Memorable logos and impactful posters that reflect your brand essence.</li>
                <li><strong>Social Media Designs:</strong> Eye-catching visuals tailored for social media campaigns.</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 text-md-end order-md-2 order-1 text-center mb-md-0 mb-3">
            <img src={desimg} alt="Designing Image" className="rounded-3 mx-auto" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      </div>
      

      {/* <div className="container-fluid base">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div> */}

      <Testimonials/>
      
    </>
  )
}

export default ServicePage
