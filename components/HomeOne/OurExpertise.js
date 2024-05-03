import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const OurExpertise = () => {
  return (
    <>
      <div id="what-we-do" className="expertise-area pb-70">
        <div className="container">
          <div className="section-title">
            <h2>What we do</h2>
          </div>

          <div className="row align-items-center">
            {/* <div className="col-lg-12"> */}
            <div className="expertise-item">
              <div className="row">
                <div className="col-sm-12 col-lg-3">
                  <div className="expertise-inner">
                    <motion.i
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                      className="icofont-doctor-alt"
                    ></motion.i>
                    <motion.h3
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      <Link href="#what-we-do">
                        HIPAA-Compliant Security Measures
                      </Link>
                    </motion.h3>
                    <motion.p
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      Ensuring data integrity and confidentiality with robust
                      HIPAA-compliant security measures.
                    </motion.p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="expertise-inner">
                    <motion.i
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                      className="icofont-stretcher"
                    ></motion.i>
                    <motion.h3
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      <Link href="#what-we-do">
                        Transparent Revenue Cycle
                      </Link>
                    </motion.h3>
                    <motion.p
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      Providing clarity and insight into your financial health
                      through transparent revenue cycle management
                    </motion.p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="expertise-inner">
                    <motion.i
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                      className="icofont-network"
                    ></motion.i>
                    <motion.h3
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      <Link href="#what-we-do">
                        Customized Reporting and Analytics
                      </Link>
                    </motion.h3>
                    <motion.p
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      Tailored insights are at your fingertips with our
                      personalized reporting and analytics solutions for
                      informed decision-making
                    </motion.p>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-3">
                  <div className="expertise-inner">
                    <motion.i
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                      className="icofont-ambulance-cross"
                    ></motion.i>
                    <motion.h3
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      <Link href="#what-we-do">Integration with EHR</Link>
                    </motion.h3>
                    <motion.p
                      viewport={{ once: true }}
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                      }}
                    >
                      Seamless workflow integration with Electronic Health
                      Records (EHR) for enhanced collaboration and comprehensive
                      patient care.
                    </motion.p>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>

            {/* <div className="col-lg-6">
              <div className="expertise-item">
                <div className="expertise-right">
                  <img src="/images/about4.jpg" alt="Expertise" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurExpertise;
