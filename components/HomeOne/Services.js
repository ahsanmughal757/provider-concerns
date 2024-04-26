import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div id="services" className="services-area pb-70 overflow-x-hidden">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <motion.div
                viewport={{ once: true }}
                initial={{
                  x: [50, 30],
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-doctor"></i>
                  <Link href="/service-details">
                    <h3>Eligibility Verification</h3>
                  </Link>
                  <p>
                    Verifying patients' insurance coverage and ensuring that
                    services provided are eligible for reimbursement.
                  </p>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: [50, 30], opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-prescription"></i>
                  <Link href="/service-details">
                    <h3>Compliance With Regulations</h3>
                  </Link>
                  <p>
                    Ensuring adherence to healthcare regulations, including
                    privacy and security standards such as HIPAA.
                  </p>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: [50, 30], opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-patient-file"></i>
                  <Link href="/service-details">
                    <h3>Claims Processing </h3>
                  </Link>
                  <p>
                    Managing the submission, tracking, and processing of
                    insurance claims for healthcare services provided.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Doctor Image */}
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0.4, opacity: 0.2 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.6, delay: 0.2 },
              }}
              className="col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center align-items-center"
            >
              <img src="/images/doctor-image.png" alt="Image" />
            </motion.div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <motion.div
                viewport={{ once: true }}
                initial={{ x: [50, 30], opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-tooth"></i>
                  <Link href="/service-details">
                    <h3>Patient Billing and Invoicing</h3>
                  </Link>
                  <p>
                    Generating and sending bills to patients for their share of
                    healthcare costs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: [50, 30], opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-heart-beat-alt"></i>
                  <Link href="/service-details">
                    <h3>Denial Management</h3>
                  </Link>
                  <p>
                    Resolving issues and appeals related to denied claims to
                    maximize reimbursement.
                  </p>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ x: [50, 30], opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.6, delay: 0.2 },
                }}
                className="service-item"
              >
                <div className="service-front">
                  <i className="icofont-drug"></i>
                  <Link href="/service-details">
                    <h3>Coding Services</h3>
                  </Link>
                  <p>
                    Accurate assignment of appropriate medical codes (such as
                    CPT, ICD-10) to describe diagnoses, procedures, and
                    services.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div className="d-flex justify-content-center">
                <a
                  href="#"
                  className="btn btn-dark py-3 px-4 d-flex justify-content-center align-items-center more-services"
                >
                  <span className="me-2">More Services</span>
                  <svg
                    style={{ height: "16px", width: "16px" }}
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-arrow-alt-circle-right"
                    viewBox="0 0 512 512"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
