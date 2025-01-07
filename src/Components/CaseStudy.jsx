import React from 'react'
import caseimg from '../assets/img/portfolio-24.jpg'

const CaseStudy = () => {
  return (
    <>
   <div className="container-fluid base py-5 px-0 px-md-5">
  <div className="row d-flex justify-content-center rounded-4 px-5 py-5 bg-black">
    <div className="col-lg-4 col-12 py-5">
      <div className="card" style={{ width: '100%' }}>
        <img 
          className="card-img-top" 
          src={caseimg} 
          alt="Card image cap" 
          style={{ width: '100%', height: 'auto' }} // This ensures the image stretches across the full width
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/casestudy" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-12 py-5">
      <div className="card" style={{ width: '100%' }}>
        <img 
          className="card-img-top" 
          src={caseimg} 
          alt="Card image cap" 
          style={{ width: '100%', height: 'auto' }} 
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/casestudy" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-12 py-5">
      <div className="card" style={{ width: '100%' }}>
        <img 
          className="card-img-top" 
          src={caseimg} 
          alt="Card image cap" 
          style={{ width: '100%', height: 'auto' }} 
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="/casestudy" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CaseStudy