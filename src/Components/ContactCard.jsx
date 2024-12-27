import React from 'react';

const ContactCard = () => {
  return (
    <div className="container-fluid purple py-5 mx-auto">
      <div className="py-5">
        <div className="row justify-content-center">
          <div
            className="col-10 d-flex col-md-8 col-lg-8 px-5 mx-5 py-5 text-center bg-light rounded-3 shadow-sm d-flex flex-column align-items-center justify-content-center"
            style={{minHeight:'250px'}}
          >
            <div className="col fw-bold fs-2">Ready to Scale Your Business?</div>
            <div className="col grey  px-5 mt-3 mb-4">
              Take the first step towards digital excellence. Partner with us and unlock unparalleled growth opportunities.
            </div>
            <button className="rounded border-0 px-3 py-2 purple-button">Get Started Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
