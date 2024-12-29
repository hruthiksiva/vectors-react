import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import webdimg from '../assets/img/webd.jpg'
const ServicePage = () => {
  return (
    <>
      <ServiceHero />
      <ServiceCards/>

      {/* Service Legacy */}

      {/* Marketing Services Section */}
      <div className='grey-bg py-5 mb-0'>
      <div className="container-fluid py-5 my-5">
        <div className="row px-5">
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
            <img src={webdimg} alt="Marketing Image" className=" img-fluid rounded-3" style={{ }} />
          </div>
        </div>
      </div>

      {/* Web/App Development Services Section */}
      <div className="container-fluid py-5 my-5">
        <div className="row px-5">
          <div className="col-md-6 order-md-2 order-1 d-flex align-items-center pe-5">
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
          <div className="col-md-6 text-md-end order-md-1 order-1 text-center mb-md-0 mb-3">
            <img src={webdimg} alt="Web/App Development Image" className="rounded-3" style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      {/* Designing Services Section */}
      <div className="container-fluid py-5 my-5">
        <div className="row px-5">
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
            <img src={webdimg} alt="Designing Image" className="rounded-3" style={{ width: '100%' }} />
          </div>
        </div>
      </div>
      </div>
      

{/* Repeat the structure above for additional content sections as needed */}

      <Testimonials/>
      
    </>
  )
}

export default ServicePage
