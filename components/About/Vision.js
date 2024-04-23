import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about4.jpg" alt="About" />
                </div>
              </div>
            </div>

            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0.2, x: 300, y: 100 }}
              whileInView={{
                scale: 1,
                x: 0,
                y: 0,
                transition: { duration: 0.3, stiffness: 10 },
                type: "spring",
              }}
              className="col-lg-6"
            >
              <div className="about-item about-right">
                <img src="/images/about-shape1.png" alt="About" />
                <h2>Vision</h2>
                <p>
                  At Provider Concerns Solutions, our vision is to revolutionize
                  medical billing, offering healthcare providers a future where
                  billing complexities are a thing of the past. We aim to be the
                  foremost provider of cutting-edge solutions, seamlessly
                  integrating technology and expertise to empower healthcare
                  professionals. Our commitment is to simplify and streamline
                  the billing process, ensuring accuracy, efficiency, and
                  transparency. We envision a healthcare landscape where our
                  solutions foster financial success, reduce administrative
                  burdens, and enhance patient satisfaction.{" "}
                </p>
                <p>
                  With a focus on integrity and reliability, we aim to build
                  enduring partnerships, delivering tailored solutions that
                  adapt to the evolving healthcare industry. Provider Concerns
                  Solutions aspires to be the trusted ally that allows
                  healthcare professionals to maximize their impact on patient
                  well-being. Join us in redefining excellence in medical
                  billing, shaping a future where providers can dedicate their
                  full attention to delivering exceptional patient care.{" "}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
