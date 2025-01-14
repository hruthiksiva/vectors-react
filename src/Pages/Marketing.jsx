import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import img1 from '../assets/img/mark1.jpg'
import img2 from '../assets/img/mark2.jpg'
import img3 from '../assets/img/mark3.jpg'
import img4 from '../assets/img/mark4.jpg'
import img5 from '../assets/img/mark5.jpg'
import img6 from '../assets/img/mark6.jpg'
import img7 from '../assets/img/mark7.jpg'
import img8 from '../assets/img/mark8.jpeg'
import img9 from '../assets/img/mark9.jpg'

import ContactCard from '../Components/ContactCard.jsx'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const marketing = () => {
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
                    Fuel Your Growth with Powerful <span className='bg-dark text-white px-2'>Marketing</span> Solutions
                  </div>
                  <br />
                  <p className='heropara grey' style={{textAlign:'center', fontFamily:'arial'}}>
                    We help businesses thrive by crafting personalized marketing strategies that amplify visibility and boost engagement. Let us transform your vision into measurable success, one campaign at a time.
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

      {/* Marketing Services Section */}
      <div className="container-fluid py-5 base">
        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 1 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[0]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Digital Marketing</h5>
                <p className='showOnHover'>
                  This includes online marketing strategies such as search engine optimization (SEO), search engine marketing (SEM), social media marketing, email marketing, and content marketing.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[1]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Social Media Marketing</h5>
                <p className='showOnHover'>
                  Focuses on using platforms like Facebook, Instagram, Twitter, LinkedIn, and others to build brand awareness, engage with customers, and drive traffic or sales.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[2]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Search Engine Optimization (SEO)</h5>
                <p className='showOnHover'>
                  A service that optimizes website content and structure to rank higher in search engine results, improving visibility and organic traffic.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 4 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[3]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Pay-Per-Click (PPC) Advertising</h5>
                <p className='showOnHover'>
                  A model of online advertising where advertisers pay a fee each time their ad is clicked. Google Ads and Bing Ads are common platforms for PPC campaigns.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[4]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Content Marketing</h5>
                <p className='showOnHover'>
                  Focuses on creating valuable, relevant content to attract and retain an audience, ultimately driving profitable customer actions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[5]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Branding and Creative Services</h5>
                <p className='showOnHover'>
                  Involves developing brand strategies, identity design (logos, color schemes, etc.), and messaging to establish a unique and recognizable brand presence.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 7 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[6]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Market Research and Analysis</h5>
                <p className='showOnHover'>
                  Includes gathering data on consumer behavior, market trends, competitor analysis, and customer feedback to inform marketing decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[7]} className='img-fluid' style={{}} />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Influencer Marketing</h5>
                <p className='showOnHover'>
                  Collaborating with social media influencers or industry leaders to promote products or services to their followers.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 9 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={images[8]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Public Relations (PR) and Media Relations</h5>
                <p className='showOnHover'>
                  Managing a brand's reputation through media outreach, press releases, events, and crisis management.
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

export default marketing
