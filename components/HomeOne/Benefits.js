import React from "react";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <>
      <div className="about-area pt-5 pb-70 overflow-hidden">
        <div className="container">
          <div style={{maxWidth: '600px'}} className="about-heading d-flex mt-3 mb-5 pb-5">
            <h1>Benefits of Working with Provider Concerns Solutions</h1>
          </div>

          <div className="row mt-5 gx-5 align-items-center">
            <div className="col-lg-5">
              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
                className="benefit-item d-flex"
              >
                <div className="benefit-front d-flex justify-content-center align-items-center gap-4">
                  <div>
                    <svg
                      aria-hidden="true"
                      className="e-font-icon-svg e-far-arrow-alt-circle-down"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Reduce Expenses</h3>
                    <p>
                      Provider Concerns Solutions can help you save thousands of
                      dollars by outsourcing medical billing. We take a small
                      cut of the money we make from successful collections.
                      Practices of all sizes can use our healthcare revenue
                      cycle management services because they are affordable.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
                className="benefit-item d-flex"
              >
                <div className="benefit-front d-flex align-items-center gap-4">
                  <div>
                    <svg
                      aria-hidden="true"
                      height="180"
                      width="180"
                      className="e-font-icon-svg e-fas-donate"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3>Maximize Revenue</h3>
                    <p>
                      Provider Concerns Solutions guarantees the accurate and
                      timely submission of your claims, ultimately minimizing
                      the occurrence of rejected or denied claims caused by an
                      inefficient medical billing cycle.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                viewport={{ once: true }}
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 0.4, delay: 0.2 },
                }}
                className="benefit-item d-flex"
              >
                <div className="benefit-front d-flex align-items-center gap-4">
                  <div>
                    <svg
                      aria-hidden="true"
                      height="210"
                      width="210"
                      className="e-font-icon-svg e-far-check-circle"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-left">Prompt Payments</h3>
                    <p>
                      We offer dependable electronic medical billing services,
                      ensuring the submission of claims to all eligible
                      carriers. Additionally, our system is configured to
                      receive Electronic Remittance Advices (ERAs), further
                      streamlining the process and reducing turnaround time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-7">
              <div className="about-item">
                  <img src="/images/benefit-img.png" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
