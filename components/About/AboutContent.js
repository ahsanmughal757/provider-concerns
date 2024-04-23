import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <>
      <div className="about-area pt-5 pb-70 overflow-hidden">
        <div className="container">
          <div className="about-heading d-flex justify-content-center align-items-centers mt-3 mb-5 pb-5">
            <h1>About</h1>
          </div>

          <div className="row mt-5 gx-5 align-items-center">
            <motion.div
              viewport={{ once: true }}
              initial={{ scale: 0.2, x: -300, y: 100 }}
              animate={{
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
                <h2>Provider Concerns Solutions</h2>
                <p>
                  Provider concerns solutions is a competent medical billing
                  company. Our aim is to optimize your revenue cycle. We
                  seamlessly consolidate the cutting-edge technology, industry
                  expertise and client oriented approach to produce exceptional
                  outcomes.{" "}
                </p>
                <p>
                  Our team is consist of skilled and expert members who
                  professionally deal with complexities of coding, compliance
                  and claims processing resulting in prompt reimbursement for
                  healthcare providers.{" "}
                </p>
                <p>
                  Provider concerns solutions enables the healthcare
                  organizations to concentrate on patients care by handling the
                  complications of billing, coding and revenue optimization. We
                  provide customized solutions to organizations of all sizes and
                  specialties to fit in their respective trends.{" "}
                </p>

                <Link href="/request-consultation">Request a Consultation</Link>
              </div>
            </motion.div>

            <div className="col-lg-6">
              <div className="about-item">
                <div className="about-left">
                  <img src="/images/about1.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
