import React from "react";

import { motion } from "framer-motion";

const CompanyValues = () => {
  return (
    <div className="services-area pb-70 mt-5 overflow-x-hidden">
      <div className="container">
        <div className="section-different d-flex flex-column justify-content-center align-items-center">
          {/* <span>Services</span> */}
          <h2>Our Company Values</h2>
        </div>

        <div className="row justify-content-start">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, stiffness: 10 },
              type: "spring",
            }}
            className="col-sm-6 col-lg-6"
          >
            <div className="values-item bg">
              <div className="service-front">
                <i className="icofont-win-trophy"></i>
                <h3>Proficiency</h3>
                <p>
                  Our certified and highly trained team is proficient in the
                  field of medical billing. They are kept updated with the
                  current regulations and technologies.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, stiffness: 10 },
              type: "spring",
            }}
            className="col-sm-6 col-lg-6"
          >
            <div className="values-item bg">
              <div className="service-front">
                <i className="icofont-people"></i>

                <h3>Variety</h3>
                <p>
                  Our team is composed of members with diverse talents, that
                  aids to satisfy all the requirements of all type and size of
                  organizations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, stiffness: 10 },
              type: "spring",
            }}
            className="col-sm-6 col-lg-6"
          >
            <div className="values-item bg">
              <div className="service-front">
                <i className="icofont-unique-idea"></i>
                <h3>Creativity</h3>
                <p>
                  At PCS the administration is a force that always encourage
                  creativity and mindfulness among its team to provide our
                  clients with innovative, efficient and accurate performances.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div viewport={{ once: true }}
            initial={{ opacity: 0, x: 300 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.3, stiffness: 10 },
              type: "spring",
            }} className="col-sm-6 col-lg-6">
            <div className="values-item bg">
              <div className="service-front">
                <i className="icofont-bulb-alt"></i>
                <h3>Innovation</h3>
                <p>
                  Our company is well equipped with latest technology and
                  innovative ideas to keep up with the continuous changing
                  patterns of medical billing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyValues;
