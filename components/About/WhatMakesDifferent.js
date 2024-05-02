import React from "react";

import { motion } from "framer-motion";

const WhatMakesDifferent = () => {
  return (
    <div className="services-area pb-70 mt-5">
      <div className="container">
        <div className="section-different d-flex flex-column justify-content-center align-items-center">
          {/* <span>Services</span> */}
          <h2>What Makes Us Different?</h2>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0.2, y: -100 }}
          whileInView={{
            scale: 1,
            y: 0,
            transition: { duration: 0.3, stiffness: 10 },
            type: "spring",
          }}
          className="row justify-content-center"
        >
          <div className="col-sm-6 col-lg-3">
            <div className="difference-item bg">
              <div className="service-front">
                <i className="icofont-chart-histogram"></i>
                <span className="text-content">
                  <h3>30%</h3>
                  <h2 className="heading">Revenue Increase</h2>
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="difference-item bg">
              <div className="service-front">
                <i className="icofont-law-document"></i>
                <span className="text-content">
                  <h3>95%</h3>
                  <h2 className="heading">Clean Claim Rate</h2>
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="difference-item bg">
              <div className="service-front">
                <i className="icofont-swoosh-down"></i>
                <span className="text-content">
                  <h3>30%</h3>
                  <h2 className="heading">Reduction in AR</h2>
                </span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="difference-item bg">
              <div className="service-front">
                <i className="icofont-document-folder"></i>
                <span className="text-content">
                  <h3>80%</h3>
                  <h2 className="heading">Collection Ratios</h2>
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatMakesDifferent;
