import React from 'react'
import CaseStudyCards from '../Components/CaseStudyCards'
import caseimg1 from '../assets/casestudy/page21.jpeg'
import caseimg2 from '../assets/casestudy/page22.jpeg'
import caseimg3 from '../assets/casestudy/page23.jpeg'
import caseimg4 from '../assets/casestudy/page24.jpeg'
import caseimg5 from '../assets/casestudy/page25.jpeg'

const CaseStudyPage = () => {
  return (
    <>
    <div className='container-fluid d-flex justify-content-center align-items-center'>
     <div className='row d-flex justify-content-center align-items-center'>
     <img src={caseimg1} className='img-fluid w-100'/>
      <img src={caseimg2} className='img-fluid w-100'/>
      <img src={caseimg2} className='img-fluid w-100'/>
      <img src={caseimg4} className='img-fluid w-100'/>
      <img src={caseimg5} className='img-fluid w-100'/>
     </div>
    </div>
      

      {/* <CaseStudyCards /> */}
    </>
  )
}

export default CaseStudyPage
