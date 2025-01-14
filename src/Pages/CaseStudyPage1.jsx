import React from 'react'
import CaseStudyCards from '../Components/CaseStudyCards'
import caseimg1 from '../assets/casestudy/page11.jpeg'
import caseimg2 from '../assets/casestudy/page12.jpeg'

const CaseStudyPage = () => {
  return (
    <>
      <img src={caseimg1} className='img-fluid w-100'/>
      <img src={caseimg2} className='img-fluid w-100'/>
      {/* <CaseStudyCards /> */}
    </>
  )
}

export default CaseStudyPage
