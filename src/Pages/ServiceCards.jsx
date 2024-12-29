import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faPencilAlt, faCode, faBrain } from '@fortawesome/free-solid-svg-icons'

const ServiceCards = () => {
  return (
    <div className='container-fluid mb-5 pb-5'>
        <div className='row px-5 g-0'>
          {/* Card 1: Marketing */}
          <div className='col-12 d-flex align-items-center justify-content-center col-lg-3  col-md-6 mb-3 '>
            <div className="card col-10 col-md-10  shadow border-0 rounded-4  " style={{backgroundColor:' #fff3e5'}}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faBullhorn} size="2x" className="mb-3" style={{color:'orange'}}/> {/* Marketing Icon */}
                <h5 className="card-title">Marketing</h5>
              </div>
            </div>
          </div>

          {/* Card 2: Design */}
          <div className='col-12 d-flex align-items-center justify-content-center col-lg-3  col-md-6 mb-3 '>
            <div className="card col-10 col-md-10  col-10 col-md-10  shadow border-0 rounded-4 " style={{backgroundColor:' #fff3e5'}}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faPencilAlt} size="2x" className="mb-3" style={{color:'orange'}}/> {/* Design Icon */}
                <h5 className="card-title">Design</h5>
              </div>
            </div>
          </div>

          {/* Card 3: Web Development */}
          <div className='col-12 d-flex align-items-center justify-content-center col-lg-3  col-md-6 mb-3 '>
            <div className="card col-10 col-md-10  col-10 col-md-10  shadow border-0 rounded-4 " style={{backgroundColor:' #fff3e5'}}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faCode} size="2x" className="mb-3" style={{color:'orange'}}/> {/* Web Development Icon */}
                <h5 className="card-title">Web Development</h5>
              </div>
            </div>
          </div>

          {/* Card 4: Artificial Intelligence */}
          <div className='col-12 d-flex align-items-center justify-content-center col-lg-3  col-md-6 mb-3 '>
            <div className="card col-10 col-md-10  col-10 col-md-10  shadow border-0 rounded-4 " style={{backgroundColor:' #fff3e5'}}>
              <div className="card-body text-center">
                <FontAwesomeIcon icon={faBrain} size="2x" className="mb-3" style={{color:'orange'}}/> {/* AI Icon */}
                <h5 className="card-title">Artificial Intelligence</h5>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default ServiceCards