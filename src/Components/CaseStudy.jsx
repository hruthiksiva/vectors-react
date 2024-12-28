import React from 'react'
import caseimg from '../assets/img/case.jpg'
const CaseStudy = () => {
  return (
    <div className='container-fluid'>
      <div className='row px-3 py-5 my-5 d-flex justify-content-center'>
        <div className='text-center col-12 mb-4'>
          <h2>Case Study heading</h2>
        </div>
        <a href='*' className='col-md-3 rounded-3 shadow col-12 p-md-5 p-5 mx-3 grey-bg text-black' style={{textDecoration:'none'}}>
          <img src={caseimg} className='img-fluid rounded-3 mb-3'/>
          <strong className=''>Case Study 1</strong>
        </a>
        <a href='*' className='col-md-3 rounded-3 shadow col-12 p-5 mx-3 grey-bg text-black' style={{textDecoration:'none'}}>
        <img src={caseimg} className='img-fluid rounded-3 mb-3'/>
          <strong className=''>Case Study 2</strong>
        </a>
        <a href='*' className='col-md-3 rounded-3 shadow col-12 p-5 mx-3 grey-bg text-black' style={{textDecoration:'none'}}>
        <img src={caseimg} className='img-fluid rounded-3 mb-3'/>
          <strong className=''>Case Study 3</strong>
        </a>
      </div>
    </div>
  )
}

export default CaseStudy