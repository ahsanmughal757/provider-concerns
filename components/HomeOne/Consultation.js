import React from "react";
import { motion } from "framer-motion";

const Consultation = () => {
  return (
    <>
      <div className="consultation-container container d-flex gap-5 mt-70">
        {/* Left Side Contact */}
        <motion.div
          viewport={{ once: true }}
          initial={{ x: [-50, -30], opacity: 0.2 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.2 },
            type: "spring",
          }}
          className="call-us d-flex flex-column justify-content-center align-items-center"
        >
          <div className="call-container">
            <div className="callus-container d-flex gap-3">
              <div className="call-icon">
                <svg
                  style={{ width: "3.5em", height: "3.5em" }}
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-headset"
                  viewBox="0 0 512 512"
                  fill="#0088cc"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                </svg>
              </div>
              <div className="call-text text-light">
                <h3 className="text-light m-0 fs-5">Call Us</h3>
                <p className="m-0">+1 (403) 640 2994</p>
              </div>
            </div>
            <div className="call-desc">
              <p className="text-light my-3" style={{ fontSize: "15px" }}>
                We provide billing services that are more than you expect. We
                can help you with the services and price negotiations.
              </p>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        </motion.div>

        {/* Request a Consulation */}
        <motion.div
          viewport={{ once: true }}
          initial={{ x: [50, 30], opacity: 0.2 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3, duration: 0.2 },
            type: "spring",
          }}
          className="request-consultation shadow py-5 px-3"
        >
          <h2 className="text-center">Request a Consultation</h2>
          <form>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Email:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Monthly Billing:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Business Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Phone:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="firstName" className="my-2">
                      Providers:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group mb-3">
                    <label htmlFor="firstName" className="my-2">
                      Total AR:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      name="firstName"
                    />
                  </div>
                  <div className="form-outline">
                    <label className="form-label" htmlFor="textAreaExample1">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      id="textAreaExample1"
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      type="submit"
                      className="submit-btn btn btn-primary mt-5"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Consultation;
