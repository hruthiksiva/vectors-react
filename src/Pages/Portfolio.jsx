import React from 'react';
import caseimg from '../assets/img/case.jpg';
import caseimg1 from '../assets/img/portfolio-12.jpg'
import caseimg2 from '../assets/img/portfolio-2.png'
import caseimg3 from '../assets/img/portfolio-3.jpg'
import caseimg4 from '../assets/img/portfolio-4.png'
import CaseStudy from '../Components/CaseStudy';
import Testimonials from '../Components/Testimonials';

const Portfolio = () => {

return(

  <>
  {/* Hero */}
  <div className="position-relative conatiner-fluid herobg d-flex flex-column justify-content-center align-items-center" style={{minHeight:'500px'}}>
          <div className="row w-75 py-5 d-flex justify-content-center align-items-center">
              <div className="col-12 text-center py-5" >
                <h1 className='col-12 heroHead' style={{fontFamily:'arial'}}>Creating impact through bold results and lasting collaborations</h1>
              </div>
          </div>
          {/* <div className='row'> */}
          <div className="col-12 ">
          <svg xmlns="http://www.w3.org/2000/svg" className=" position-absolute w-100 origin-center transform scale-110" fill="none" viewBox="0 0 2262 263" style={{left:'0', bottom:'-1'}}>
               <path fill-rule="evenodd" clip-rule="evenodd" d="M0 33.3596C0 33.3596 870 157.138 1318 131.5C1766 105.862 2262 0 2262 0V263H0L0 33.3596Z" fill="black"></path>
          </svg>
          </div>
        </div>

        {/* bento grids */}
       <div className="container-fluid d-flex justify-content-center py-5 bg-black align-items-center">
   <div className="row mx-0 mx-lg-5 d-flex justify-content-center">
    <div className="col  m-0">
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      <div className="row -danger m-0">
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      </div>
      <div className="row -danger m-0">
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg3} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Moo Farm Co.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      </div>
    </div>
    <div className="col  m-0">
    <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
    </div>
    <div className="col  m-0">
    <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
      <div className="row p-3  mb-4  m-0 bg-dark rounded-4 text-white d-flex justify-content-center align-items-center">
        <img src={caseimg1} className='img-fluid w-100 my-3 rounded-5'/>
        <h3 className="my-3">Tech Solutions Inc.</h3>
        <h5 className='mb-3'style={{color:'grey'}}>Revamped the digital presence and streamlined internal systems for better productivity.</h5>
        <h5><span className="badge fw-normal bg-light text-black badge-secondary">Marketing</span> <span className="badge fw-normal bg-light text-black badge-secondary">Product Design</span></h5>
        <h5 ><span className="badge fw-normal bg-light text-black badge-secondary">Web Design</span> <span className="badge fw-normal bg-light text-black badge-secondary">UX Strategy</span></h5>
      </div>
    </div>
  </div>
</div>
<div className='py-5 base'>
  <Testimonials/>
</div>

</>
)



   
  // const caseStudies = [
  //   { img: caseimg1, title: "Case Study 1", link: "#" },
  //   { img: caseimg2, title: "Case Study 2", link: "#" },
  //   { img: caseimg3, title: "Case Study 3", link: "#" },
  //   { img: caseimg4, title: "Case Study 3", link: "#" }
  // ];

  // const renderCards = (category) => {
  //   return caseStudies.map((caseStudy, index) => (
  //     <div className="col-md-3 col-12 mb-4" key={index}>
  //       <div className="card -0 shadow-sm" style={{  }}>
  //         <img className="card-img-top" src={caseStudy.img} alt="Card image cap" />
  //         <div className="card-body">
  //           <h5 className="card-title">{caseStudy.title}</h5>
  //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
  //         </div>
  //       </div>
  //     </div>
  //   ));
  // };

  // return (
  //   <div>
  //     {/* Design Section */}
  //     <div className="container-fluid">
  //       <div className="row px-3 py-5 my-5 d-flex justify-content-center">
  //         <div className="text-center col-12 mb-4">
  //           <h2>Design</h2>
  //         </div>
  //         {renderCards('Design')}
  //       </div>
  //     </div>

  //     {/* Web Development Section */}
  //     <div className="container-fluid">
  //       <div className="row px-3 py-5 my-5 d-flex justify-content-center">
  //         <div className="text-center col-12 mb-4">
  //           <h2>Web Development</h2>
  //         </div>
  //         {renderCards('Web Development')}
  //       </div>
  //     </div>

  //     {/* Marketing Section */}
  //     <div className="container-fluid">
  //       <div className="row px-3 py-5 my-5 d-flex justify-content-center">
  //         <div className="text-center col-12 mb-4">
  //           <h2>Marketing</h2>
  //         </div>
  //         {renderCards('Marketing')}
  //       </div>
  //     </div>

  //     {/* Artificial Intelligence Section */}
  //     <div className="container-fluid">
  //       <div className="row px-3 py-5 my-5 d-flex justify-content-center">
  //         <div className="text-center col-12 mb-4">
  //           <h2>Artificial Intelligence</h2>
  //         </div>
  //         {renderCards('Artificial Intelligence')}
  //       </div>
  //     </div>

  //    
  //   </div>
  // );

};

export default Portfolio;
