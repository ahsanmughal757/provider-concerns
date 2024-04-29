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
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-head-side-mask"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.15,184.42C-2.17,244.21,23,298.06,64,334.88V512H224V316.51L3.67,156.25A182.28,182.28,0,0,0,.15,184.42ZM509.22,275c-21-47.12-48.5-151.75-73.12-186.75A208.11,208.11,0,0,0,266.11,0H200C117,0,42.48,50.57,13.25,123.65L239.21,288H511.76A31.35,31.35,0,0,0,509.22,275ZM320,224a32,32,0,1,1,32-32A32.07,32.07,0,0,1,320,224Zm16,144H496l16-48H256V512H401.88a64,64,0,0,0,60.71-43.76L464,464H336a16,16,0,0,1,0-32H474.67l10.67-32H336a16,16,0,0,1,0-32Z"></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-far-eye"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-heartbeat"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-brain"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                  </svg>
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
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-stethoscope"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path>
                  </svg>
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
                  <div className="icon">
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-fas-pills"
                      viewBox="0 0 576 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112zm48 224H64V144c0-26.5 21.5-48 48-48s48 21.5 48 48v112zm139.7-29.7c-3.5-3.5-9.4-3.1-12.3.8-45.3 62.5-40.4 150.1 15.9 206.4 56.3 56.3 143.9 61.2 206.4 15.9 4-2.9 4.3-8.8.8-12.3L299.7 226.3zm229.8-19c-56.3-56.3-143.9-61.2-206.4-15.9-4 2.9-4.3 8.8-.8 12.3l210.8 210.8c3.5 3.5 9.4 3.1 12.3-.8 45.3-62.6 40.5-150.1-15.9-206.4z"></path>
                    </svg>
                  </div>

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
