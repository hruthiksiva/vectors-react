import React from 'react'
import caseimg from '../assets/img/case.jpg'
import CaseStudy from '../Components/CaseStudy'

const Portfolio = () => {
  return (
    <div>
      {/* <Design/>
      <WebDevelopment/>
      <Marketing/> */}
      
      <div className='container-fluid'>
        <div className='row px-3 py-5 my-5 d-flex justify-content-center'>
          <div className='text-center col-12 mb-4'>
            <h2>Design</h2>
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

      <div className='container-fluid'>
        <div className='row px-3 py-5 my-5 d-flex justify-content-center'>
          <div className='text-center col-12 mb-4'>
            <h2>Web Development</h2>
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

      <div className='container-fluid'>
        <div className='row px-3 py-5 my-5 d-flex justify-content-center'>
          <div className='text-center col-12 mb-4'>
            <h2>Marketing</h2>
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

      <div className='container-fluid'>
        <div className='row px-3 py-5 my-5 d-flex justify-content-center'>
          <div className='text-center col-12 mb-4'>
            <h2>Artificial intelligence</h2>
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

      <CaseStudy/>
    </div>
  )
}

export default Portfolio
