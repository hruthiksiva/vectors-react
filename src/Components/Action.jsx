import React from 'react'

const Action = () => {
  return (
    // <div className='container-fluid py-5 '>
    //   <div className='row  mx-2 rounded-5  py-5'>
    //     {/* Each card is in a separate col-5 with no height restrictions */}
    //     <div className='col-5 p-4 my-lg-4 mb-3 mb-lg-0 rounded-3 darkgrey shadow-sm'>
    //       <h1>100+</h1>
    //       <h1>Premium Businesses Transformed.</h1>
    //     </div>
    //     <div className='col-5 p-4 my-lg-4 mb-3 mb-lg-0 rounded-3 darkgrey shadow-sm'>
    //       <h1>10,000+</h1>
    //       <h1>Hours of Innovation Delivered</h1>
    //     </div>
    //     <div className='col-5 p-4 my-lg-4 mb-3 mb-lg-0 rounded-3 darkgrey shadow-sm'>
    //       <h1>99%</h1>
    //       <h1>Client Satisfaction Rate</h1>
    //     </div>
    //     <div className='col-5 p-4 my-lg-4 mb-3 mb-lg-0 rounded-3 darkgrey shadow-sm'>
    //       <h1>500%</h1>
    //       <h1>Average Business Grow Digital Transition</h1>
    //     </div>
    //   </div>
    // </div>
    <>
       <div className="container-fluid bg-black d-flex justify-content-center align-items-center px-5" style={{minHeight:'600px'}}>
        <div className="row d-flex justify-content-center py-5 my-5 px-5">
        <div className="col m-0">
          <div className="col p-4 darkgrey my-lg-4 mb-4 mb-lg-0 rounded-5">
             <h1 style={{fontSize:'110px'}}>100+</h1>
             <h1>Premium Businesses Transformed</h1>
          </div>
          <div className="col p-4 darkgrey my-lg-4 mb-4 mb-lg-0 rounded-5">
          <h1 style={{fontSize:'110px'}}>99%</h1>
           <h1>Client Satisfaction Rate</h1>
          </div>
        </div>

        <div className="col m-0">
          <div className="col col p-4 darkgrey my-lg-4 mb-4 mb-lg-0 rounded-5">
          <h1 style={{fontSize:'110px'}}>10,000+</h1>
          <h1>Hours of Innovation Delivered</h1></div>
          <div className="col col p-4 darkgrey my-lg-4 mb-3 mb-lg-0 rounded-5">
          <h1 style={{fontSize:'110px'}}>500%</h1>
          <h1>Average Business Grow Digital Transition</h1>
          </div>
        </div>
        </div>
        
       </div>
    </>
    
  )
}

export default Action




