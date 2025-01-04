import React from 'react';
import caseimg from '../assets/img/case.jpg';
import caseimg1 from '../assets/img/portfolio-5.jpg'
import caseimg2 from '../assets/img/portfolio-2.png'
import caseimg3 from '../assets/img/portfolio-3.jpg'
import caseimg4 from '../assets/img/portfolio-4.png'
import CaseStudy from '../Components/CaseStudy';

const Portfolio = () => {
  const caseStudies = [
    { img: caseimg1, title: "Case Study 1", link: "#" },
    { img: caseimg2, title: "Case Study 2", link: "#" },
    { img: caseimg3, title: "Case Study 3", link: "#" },
    { img: caseimg4, title: "Case Study 3", link: "#" }
  ];

  const renderCards = (category) => {
    return caseStudies.map((caseStudy, index) => (
      <div className="col-md-3 col-12 mb-4" key={index}>
        <div className="card border-0 shadow-sm" style={{  }}>
          <img className="card-img-top" src={caseStudy.img} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{caseStudy.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {/* Design Section */}
      <div className="container-fluid">
        <div className="row px-3 py-5 my-5 d-flex justify-content-center">
          <div className="text-center col-12 mb-4">
            <h2>Design</h2>
          </div>
          {renderCards('Design')}
        </div>
      </div>

      {/* Web Development Section */}
      <div className="container-fluid">
        <div className="row px-3 py-5 my-5 d-flex justify-content-center">
          <div className="text-center col-12 mb-4">
            <h2>Web Development</h2>
          </div>
          {renderCards('Web Development')}
        </div>
      </div>

      {/* Marketing Section */}
      <div className="container-fluid">
        <div className="row px-3 py-5 my-5 d-flex justify-content-center">
          <div className="text-center col-12 mb-4">
            <h2>Marketing</h2>
          </div>
          {renderCards('Marketing')}
        </div>
      </div>

      {/* Artificial Intelligence Section */}
      <div className="container-fluid">
        <div className="row px-3 py-5 my-5 d-flex justify-content-center">
          <div className="text-center col-12 mb-4">
            <h2>Artificial Intelligence</h2>
          </div>
          {renderCards('Artificial Intelligence')}
        </div>
      </div>

      <CaseStudy />
    </div>
  );
};

export default Portfolio;
