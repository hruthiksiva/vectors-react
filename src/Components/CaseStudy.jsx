import React from 'react'
import caseimg1 from '../assets/casestudy/card11.jpeg'
import caseimg2 from '../assets/casestudy/card2.jpg'
import caseimg3 from '../assets/casestudy/card3.jpeg'
const CaseStudy = () => {
  return (
    <>
   <div className="container-fluid base py-5 px-0 px-md-5">
  <div className="row d-flex justify-content-center rounded-4 px-5 py-5 bg-black">
  <div className='col-12 text-white d-flex justify-content-center'>
    <h1 className=''>Case Study</h1>
  </div>
    <div className="col-lg-4 col-12 py-5">
      <div className="col border-secondary border p-3 rounded-3" style={{ width: '100%' }}>
        <img 
          className="card-img-top my-3" 
          src={caseimg1} 
          alt="Card image" 
          style={{ width: '100%', height: 'auto', opacity:'95%' }} // This ensures the image stretches across the full width
        />
        <div className="card-body">
          <h5 className="card-title text-white">Case study 1</h5>
          <p className="card-text"></p>
          <a href="/casestudy1" className="btn bg-dark text-white py-2 px-3 my-2">Learn more</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-12 py-5">
      <div className="col border-secondary border p-3 rounded-3" style={{ width: '100%' }}>
        <img 
          className="card-img-top my-3" 
          src={caseimg2} 
          alt="Card image" 
          style={{ width: '100%', height: 'auto', opacity:'95%' }} 
        />
        <div className="card-body">
          <h5 className="card-title text-white">Case study 2</h5>
          <p className="card-text"></p>
          <a href="/casestudy2" className="btn bg-dark text-white py-2 px-3 my-2">Learn more</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-12 py-5">
      <div className="col border-secondary border p-3 rounded-3" style={{ width: '100%' }}>
        <img 
          className="card-img-top my-3" 
          src={caseimg3} 
          alt="Card image" 
          style={{ width: '100%', height: 'auto', opacity:'95%' }} 
        />
        <div className="card-body">
          <h5 className="card-title text-white">Case study 3</h5>
          <p className="card-text"></p>
          <a href="/casestudy3" className="btn bg-dark text-white py-2 px-3 my-2">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CaseStudy