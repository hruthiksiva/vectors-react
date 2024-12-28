import React from 'react';
import mission from '../assets/img/mission.jpg';
import vision from '../assets/img/vision.jpg'; 

const MissionAndVision = () => {
  return (
    <div className='container-fluid py-5 bg-light'>
      <div className='row px-5 py-5 d-flex justify-content-center'>
        
        {/* Mission Card */}
        <div className='col-md-5 purple p-5 m-3 shadow-sm'>
          {/* <img src={mission} className='img-fluid w-50 mb-4' alt="Mission Image" /> */}
            <h1 className='fw-bold' style={{fontFamily:'-moz-initial'}}>MISSION</h1>
          <strong>To Empower Growth Through Innovation</strong>
          <p>
            Our mission is to deliver premium, end-to-end digital solutions that help businesses not just adapt but excel in the online world.
            We aim to create impactful experiences that drive growth, enhance brand visibility, and ensure long-term success.
          </p>
        </div>

        {/* Vision Card */}
        <div className='col-md-5 purple p-5 m-3 shadow-sm'>
          {/* <img src={vision} className='img-fluid w-50 mb-4' alt="Vision Image" /> */}
          <h1 className='fw-bold' style={{fontFamily:'-moz-initial'}}>VISION</h1>
          <strong>Redefining the Future of Digital Transformation</strong>
          <p>
            We envision a world where businesses of all sizes can leverage digital tools to achieve exponential growth.
            Our goal is to set new standards in digital excellence, one project at a time.
          </p>
        </div>

      </div>
    </div>
  );
}

export default MissionAndVision;
