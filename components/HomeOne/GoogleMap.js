import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area container mb-5">
        <div className="row gx-3 map-container">
          <div className="card col-sm-12 col-md-7 col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8288827683186!2d-123.36207488437536!3d48.44062387924871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f73811b3b8513%3A0x968aa5572a89f353!2s210-2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1607418551666!5m2!1sen!2sbd"
              height="550"
            ></iframe>
          </div>

          <div className="card col-sm-12 col-md-5 col-lg-5 content-background">
            <div className="container map-content my-5 mx-3">
              <h5 className="text-blue">Contact Us</h5>
              <h4>Get In Touch With Us</h4>
              <hr />

              <div className="contact-info">
                <div className="d-flex align-items-baseline gap-2">
                  <i className="icofont-location-pin"></i>
                  <h5 className="text-blue">Our Location</h5>
                </div>
                <p>5900 Balcones Dr 16645, Austin, Texas 78731, USA</p>
              </div>

              <div className="contact-info">
                <div className="d-flex align-items-baseline gap-2">
                  <i className="icofont-phone"></i>
                  <h5 className="text-blue">Our Contact</h5>
                </div>
                <p>+1 (409) 934 7674​</p>
              </div>

              <div className="contact-info">
                <div className="d-flex align-items-baseline gap-2">
                  <i className="icofont-email"></i>
                  <h5 className="text-blue">Mail Us</h5>
                </div>
                <p>support@providerconcerns.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;
