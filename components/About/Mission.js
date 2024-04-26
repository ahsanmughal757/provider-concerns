import React from "react";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <>
      <div className="about-area pt-100 pb-70">
        <div className="container">
          <div className="row gx-5 align-items-center">
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
                <h2>Mission</h2>
                <p>
                  At Provider Concerns Solutions, our mission is to empower
                  healthcare providers by delivering innovative and reliable
                  medical billing solutions. We are committed to simplifying the
                  complexities of the billing process, ensuring accuracy and
                  efficiency. Our goal is to enhance the financial success of
                  our clients, reduce administrative burdens, and elevate
                  patient satisfaction. Through cutting-edge technology and a
                  client-centric approach, we strive to be a trusted partner,
                  providing tailored solutions that evolve with the
                  ever-changing healthcare landscape. Provider Concerns
                  Solutions is dedicated to setting new standards in medical
                  billing excellence, allowing healthcare professionals to focus
                  on what matters most – delivering exceptional patient care
                  with confidence.{" "}
                </p>
              </div>
            </motion.div>
            <div className="col-lg-6">
              <div className="">
                <div className="">
                  <img src="/images/mission.png" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
