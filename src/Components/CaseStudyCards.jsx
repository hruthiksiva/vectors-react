import React from 'react'

const CaseStudyCards = () => {
  return (
    <div className='container-fluid' style={{fontFamily:'arial'}}>
    <div className="row d-flex justify-content-center">
      <div className="card border-0 rounded-4 col-11 m-3 col-md-4 text-white  mb-3" style={{backgroundColor:'navy', opacity:'90%'}}>
          <div className="card-body">
            <h5 className="  p-1 mx-2 rounded-4">Problem</h5><hr className='mt-0 color'/>
            <p className="card-text">
            <ul>
              <li>Luxe Interiors is a well-established offline premium interior design firm.</li>
              <li>The firm faced challenges in establishing a robust online presence.</li>
              <li>Their existing website was outdated.</li>
              <li>The branding lacked consistency.</li>
              <li>They struggled to attract quality leads online.</li>
              <li>Despite these challenges, Luxe Interiors had a strong offline reputation.</li>
            </ul>
            </p>
          </div>
      </div>

      <div className="card border-0 rounded-4 col-11 px-2 m-3 col-md-4 text-white  mb-3" style={{backgroundColor:'navy', opacity:'90%'}}>
<div className="card-body">
<h5 className="  p-1 mx-2 rounded-4">Our Approach</h5><hr className='mt-0 color'/>
<p className="card-text">
<ul>
  <li>Website Revamping: We overhauled their outdated website with a sleek, responsive design focused on improving user experience and performance.</li>
  <li>UI/UX Optimization: Designed an intuitive and visually appealing interface to ensure smooth navigation and better engagement.</li>
  <li>Brand Coloring: Standardized brand colors to create a cohesive visual identity across the website, social media, and marketing collateral.</li>
  <li>SEO Optimization: Improved site structure, optimized content, and implemented advanced SEO strategies to enhance organic search visibility.</li>
  <li>Social Media Marketing: Developed targeted campaigns to increase their online visibility and drive high-quality traffic to their revamped website.</li>
  <li>Online Ad Marketing: Launched targeted ad campaigns focusing on specific demographics and geographic regions to maximize ROI.</li>
</ul>
</p>
</div>
</div>

      </div>

      <div className="row d-flex justify-content-center">
      <div className="card border-0 rounded-4 col-11 m-3 col-md-8 text-white  mb-3" style={{backgroundColor:'navy', opacity:'90%'}}>
<div className="card-body">
<h5 className=" card-title p-1 mx-2 rounded-4">Results Achieved</h5><hr className='mt-0 color'/>
<p className="card-text">
<ul>
  <li>300% Increase in organic website traffic within six months.</li>
  <li>Double the number of quality leads generated through optimized ad campaigns.</li>
  <li>Enhanced brand perception and consistency across all platforms.</li>
  <li>Significant improvement in online engagement and social media following.</li>
</ul>
</p>
</div>
</div>

    </div>
    </div>
  )
}

export default CaseStudyCards