import React from "react";
import Link from "next/link";

const OurExpertise = () => {
  return (
    <>
      <div id="what-we-do" className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What we do</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="row">
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-doctor-alt"></i>
                      <h3>
                        <Link href="/doctor-details">
                          HIPAA-Compliant Security Measures
                        </Link>
                      </h3>
                      <p>
                        Ensuring data integrity and confidentiality with robust
                        HIPAA-compliant security measures.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-stretcher"></i>
                      <h3>
                        <Link href="/doctor-details">
                          Transparent Revenue Cycle
                        </Link>
                      </h3>
                      <p>
                        Providing clarity and insight into your financial health
                        through transparent revenue cycle management
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-network"></i>
                      <h3>
                        <Link href="/doctor-details">
                          Customized Reporting and Analytics
                        </Link>
                      </h3>
                      <p>
                        Tailored insights are at your fingertips with our
                        personalized reporting and analytics solutions for
                        informed decision-making
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-6">
                    <div className="expertise-inner">
                      <i className="icofont-ambulance-cross"></i>
                      <h3>
                        <Link href="/doctor-details">Integration with EHR</Link>
                      </h3>
                      <p>
                        Seamless workflow integration with Electronic Health
                        Records (EHR) for enhanced collaboration and
                        comprehensive patient care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
