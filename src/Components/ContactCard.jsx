import React from 'react';

const ContactCard = () => {
  return (
    <div className="container-fluid purple py-5 mx-auto">
      <div className="py-5">
        <div className="row text-center py-5">
            <div className=" fw-bold text-fluid" style={{fontSize:'70px'}}>Ready to Scale Your Business?</div>
                <div className=" grey px-5 mt-3 mb-4 herpara"  style={{fontSize:'20px'}}>
                  Take the first step towards digital excellence. Partner with us and unlock unparalleled growth opportunities.
                </div>
            <a className="" style={{textDecoration:'none', color:'teal'}}>Get Started Today > </a>
  
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
