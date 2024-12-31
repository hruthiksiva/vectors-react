import React from 'react'
import CaseStudyCards from '../Components/CaseStudyCards'
import caseimg from '../assets/img/1CaseStudy.jpg'

const CaseStudyPage = () => {
  return (
    <>
      <div className='container-fluid purple' style={{ fontFamily: 'arial' }}>
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-10 rounded-4 purple p-5">
            <div style={{ position: 'relative', width: '100%' }}>
              {/* Image */}
              <img src={caseimg} className='rounded-4 w-100' style={{ opacity: '80%' }} />

              {/* Gradient Overlay */}
              <div className='rounded-4'
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))', // Dark gradient
                  zIndex: 1
                }}
              ></div>

              {/* Text */}
              <div
                className='text-center'
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2, // Ensure the text stays on top of the overlay
                  color: 'white', // Adjust text color
                  fontSize: '50px', // Adjust font size
                  fontWeight: 'bold' // Adjust font weight
                }}
              >
                <h1 style={{ color: 'orange', fontFamily: 'arial' }}>CASE STUDY</h1>
                <p style={{ fontFamily: 'roboto' }}>LUXE INTERIORS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyCards />
    </>
  )
}

export default CaseStudyPage
