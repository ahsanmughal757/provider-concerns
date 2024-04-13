import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 col-lg-3">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a
                        className="facebook-link"
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        <i className="icofont-facebook text-light"></i>
                        <h6>Facebook</h6>
                      </a>
                    </li>
                    <span
                      className="vertical-separator p-0"
                      style={{ height: "100%" }}
                    ></span>
                    <li>
                      <a
                        className="twitter-link"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <i className="icofont-twitter text-light"></i>
                        <h6>Twitter</h6>
                      </a>
                    </li>
                    <span className="vertical-separator p-0"></span>
                    <li>
                      <a
                        className="instagram-link"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <i className="icofont-instagram text-light"></i>
                        <h6>Instagram</h6>
                      </a>
                    </li>
                    <span className="vertical-separator p-0"></span>

                    <li>
                      <a
                        className="linkedin-link"
                        href="https://www.linkedin.com/"
                        target="_blank"
                      >
                        <i className="icofont-linkedin text-light"></i>
                        <h6>LinkedIn</h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left d-flex justify-content-end">
                  <ul>
                    <li>
                      <a className="phone-link" href="tel:+07554332322">
                        <i className="icofont-ui-call text-light"></i>
                        Call : +07 554 332 322
                      </a>
                    </li>
                    <span className="vertical-separator p-0"></span>
                    <li>
                      <a className="email-link" href="mailto:hello@disin.com">
                        <i className="icofont-ui-message  text-light"></i>
                        hello@disin.com
                      </a>
                    </li>
                    {/* <li>
                      <i className="icofont-location-pin"></i>
                      210-27 Quadra, Canada
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
