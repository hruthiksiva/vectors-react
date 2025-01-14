import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import desImg1 from '../assets/img/des1.png'
import desImg2 from '../assets/img/des2.jpg'
import desImg3 from '../assets/img/des3.png'
import desImg4 from '../assets/img/des4.jpg'
import desImg5 from '../assets/img/des5.jpg'
import desImg6 from '../assets/img/des6.jpg'
import desImg7 from '../assets/img/des7.png'
import desImg8 from '../assets/img/des8.jpg'
import desImg9 from '../assets/img/des9.jpg'

import ContactCard from '../Components/ContactCard.jsx'

const designImages = [desImg1, desImg2, desImg3, desImg4, desImg5, desImg6, desImg7, desImg8, desImg9];

const designServices = () => {
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
                    Enhance Your Brand with Professional <span className='bg-dark text-white px-2'>Design</span> Services
                  </div>
                  <br />
                  <p className='heropara grey' style={{textAlign:'center', fontFamily:'arial'}}>
                    Our design services help bring your brand vision to life through creativity, innovative designs, and user-centered experiences.
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

      {/* Design Services Section */}
      <div className="container-fluid py-5 base">
        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 1 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[0]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Brand Identity Design</h5>
                <p className='showOnHover'>
                  We create visually appealing brand identities that resonate with your audience and define your brand’s unique personality.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[1]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Logo Design</h5>
                <p className='showOnHover'>
                  Our logo design service ensures that your business has a memorable, professional logo that represents your brand.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[2]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Web Design</h5>
                <p className='showOnHover'>
                  We design user-friendly, responsive websites that are visually attractive and provide seamless experiences for your visitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 4 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[3]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>UI/UX Design</h5>
                <p className='showOnHover'>
                  We create intuitive and engaging user interfaces that offer smooth navigation and exceptional user experience across devices.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative d-flex align-items-center justify-content-center" style={{backgroundColor:'#ffb93f'}}>
            <img src={designImages[4]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Print Design</h5>
                <p className='showOnHover'>
                  From brochures to business cards, we design print materials that reflect your brand's identity and leave a lasting impression.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[5]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Packaging Design</h5>
                <p className='showOnHover'>
                  We design packaging that not only protects your product but also captures the attention of your customers and strengthens your brand.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 7 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[6]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Social Media Design</h5>
                <p className='showOnHover'>
                  We design visually striking social media posts, banners, and ads that help you stand out and engage with your audience.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[7]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Infographics Design</h5>
                <p className='showOnHover'>
                  We create visually engaging infographics that simplify complex data and make it easy for your audience to understand.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 9 */}
          <div className="col-12 col-lg-3 my-3 g-0 mx-2 position-relative">
            <img src={designImages[8]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Motion Graphics Design</h5>
                <p className='showOnHover'>
                  We design captivating motion graphics that enhance your brand messaging and make your content more dynamic and memorable.
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

export default designServices
