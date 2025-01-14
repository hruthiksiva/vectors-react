import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import webImg1 from '../assets/img/web1.png'
import webImg2 from '../assets/img/web2.jpg'
import webImg3 from '../assets/img/web3.jpg'
import webImg4 from '../assets/img/web4.jpg'
import webImg5 from '../assets/img/web5.png'
import webImg6 from '../assets/img/web6.jpg'
import webImg7 from '../assets/img/web7.jpg'
import webImg8 from '../assets/img/web8.jpg'
import webImg9 from '../assets/img/web9.jpg'

import ContactCard from '../Components/ContactCard.jsx'

const webImages = [webImg1, webImg2, webImg3, webImg4, webImg5, webImg6, webImg7, webImg8, webImg9];

const webDevelopment = () => {
  return (
    <>
      {/* <ServiceHero /> */}
      {/* <ServiceCards/> */}
      <div className='d-flex justify-content-center herobg py-5 position-relative' style={{minHeight:'800px'}}>
        <div className='conatiner-fluid py-5'>
          <div className='row'>
            <div className='container-fluid rounded-4' style={{minHeight:'300px'}}>
              <div className='row w-100 py-3 d-flex justify-content-center'>
                <div className='col-10 col-lg-8 px-3' style={{textAlign:'justify'}}>
                  <div className='hero-heading text-center lh-sm' style={{fontFamily:'arial'}}>
                    Build Your Digital Presence with Expert <span className='bg-dark text-white px-2'>Web Development</span> Services
                  </div>
                  <br />
                  <p className='heropara grey' style={{textAlign:'center', fontFamily:'arial'}}>
                    Our web development services are tailored to help businesses create engaging, responsive, and functional websites. From front-end design to back-end solutions, we provide end-to-end support for all your web development needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="shadowUp position-absolute w-100 origin-center transform scale-110" fill="none" viewBox="0 0 2262 263" style={{left:'0', bottom:'-1'}}>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 33.3596C0 33.3596 870 157.138 1318 131.5C1766 105.862 2262 0 2262 0V263H0L0 33.3596Z" fill="#f0eff2"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Web Development Services Section */}
      <div className="container-fluid py-5 base">
        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 1 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[0]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Custom Web Development</h5>
                <p className='showOnHover'>
                  We build fully custom websites tailored to your business needs, ensuring an engaging user experience and advanced functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[1]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>E-commerce Development</h5>
                <p className='showOnHover'>
                  Create powerful and secure online stores that provide a seamless shopping experience for customers while boosting sales.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[2]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Responsive Web Design</h5>
                <p className='showOnHover'>
                  We ensure that your website is mobile-friendly and responsive, offering optimal viewing experiences across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 4 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3" style={{backgroundColor:'#2039e5'}}>
            <img src={webImages[3]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Content Management Systems (CMS)</h5>
                <p className='showOnHover'>
                  We offer CMS development services to help you manage, create, and modify content on your website with ease.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[4]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Web Application Development</h5>
                <p className='showOnHover'>
                  We create dynamic, interactive, and feature-rich web applications that cater to your business requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[5]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Website Maintenance & Support</h5>
                <p className='showOnHover'>
                  Our team provides ongoing website maintenance services to ensure your site is always up-to-date, secure, and performing at its best.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 7 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[6]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>SEO Optimization</h5>
                <p className='showOnHover'>
                  We optimize your website’s on-page and off-page SEO, helping it rank higher in search engine results to attract more traffic.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[7]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>API Integration</h5>
                <p className='showOnHover'>
                  We provide seamless API integrations to enhance your website’s functionality, enabling it to interact with third-party services.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 9 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={webImages[8]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Web Hosting Solutions</h5>
                <p className='showOnHover'>
                  We offer secure and reliable web hosting services to ensure your website performs optimally, with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactCard />
    </>
  )
}

export default webDevelopment
