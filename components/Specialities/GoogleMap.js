import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div className="map-area container mb-5">
        <div className="row gx-3 map-container">
          <div className="card col-sm-12 col-md-7 col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.330390834496!2d-97.75752952530326!3d30.34155887477525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2feb064b3%3A0xfbcc19243aa6ddc0!2s5900%20Balcones%20Dr%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2s!4v1714413105626!5m2!1sen!2s"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
                <p>+1 (888) 285-2880​</p>
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
