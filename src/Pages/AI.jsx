import React from 'react'
import ServiceHero from '../Components/ServiceHero.jsx'
import ServiceCards from './ServiceCards.jsx'
import Testimonials from '../Components/Testimonials.jsx'
import aiImg1 from '../assets/img/ai1.jpg'
import aiImg2 from '../assets/img/ai2.jpg'
import aiImg3 from '../assets/img/ai3.jpg'
import aiImg4 from '../assets/img/ai4.png'
import aiImg5 from '../assets/img/ai5.jpeg'
import aiImg6 from '../assets/img/ai6.jpg'
import aiImg7 from '../assets/img/ai7.jpg'
import aiImg8 from '../assets/img/ai8.png'
import aiImg9 from '../assets/img/ai9.jpg'

import ContactCard from '../Components/ContactCard.jsx'

const aiImages = [aiImg1, aiImg2, aiImg3, aiImg4, aiImg5, aiImg6, aiImg7, aiImg8, aiImg9];

const aiServices = () => {
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
                    Empower Your Business with Cutting-edge <span className='bg-dark text-white px-2'>Artificial Intelligence</span> Solutions
                  </div>
                  <br />
                  <p className='heropara grey' style={{textAlign:'center', fontFamily:'arial'}}>
                    Our AI-powered solutions are designed to automate processes, enhance decision-making, and provide deeper insights to elevate your business.
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

      {/* AI Services Section */}
      <div className="container-fluid py-5 base ">
        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 1 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[0]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Machine Learning Models</h5>
                <p className='showOnHover'>
                  We create advanced machine learning models that allow your systems to learn from data and make intelligent predictions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[1]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Natural Language Processing (NLP)</h5>
                <p className='showOnHover'>
                  We use NLP to help machines understand, interpret, and generate human language, enabling chatbots, voice assistants, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[2]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Computer Vision</h5>
                <p className='showOnHover'>
                  We build AI systems that can interpret and understand visual data, enabling automation in industries like manufacturing and healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 4 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative d-flex justify-content-center align-items-center my-3" style={{backgroundColor:'#217cc2'}}>
            <img src={aiImages[3]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>AI Chatbots</h5>
                <p className='showOnHover'>
                  We develop AI-powered chatbots that can interact with users, providing assistance, answering questions, and offering personalized experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[4]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>AI-powered Analytics</h5>
                <p className='showOnHover'>
                  We use AI to provide deeper insights into your business data, enabling you to make better, data-driven decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[5]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Predictive Analytics</h5>
                <p className='showOnHover'>
                  Using AI, we help predict future trends, customer behaviors, and business outcomes, enabling proactive decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mx-3 mx-lg-0 d-flex justify-content-center">
          {/* Service Card 7 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[6]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>AI Robotics</h5>
                <p className='showOnHover'>
                  We develop intelligent robots that can carry out complex tasks in manufacturing, healthcare, logistics, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 8 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[7]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>Deep Learning</h5>
                <p className='showOnHover'>
                  Leveraging neural networks, we build deep learning models to solve complex problems like image recognition, language translation, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 9 */}
          <div className="col-12 col-lg-3 g-0 mx-2 position-relative my-3">
            <img src={aiImages[8]} className='img-fluid' />
            <div className='textBg text-white position-absolute bottom-0' style={{minWidth:'100px'}}>
              <div className='text'>
                <h5>AI Strategy Consulting</h5>
                <p className='showOnHover'>
                  We offer AI strategy consulting to help you understand how AI can enhance your business operations and create competitive advantages.
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

export default aiServices
