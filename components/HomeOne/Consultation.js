import React from "react";
import {
  Formik,
  Form,
  Field,
  FormikProvider,
  ErrorMessage,
  useField,
  useFormik,
} from "formik";

import * as Yup from "yup";

import { motion } from "framer-motion";

const TextInputLiveFeedback = ({ label, helpText, ...props }) => {
  const [field, meta] = useField(props);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div
      className={` ${showFeedback ? (meta.error ? "invalid" : "valid") : ""}`}
    >
      <div className="d-flex align-items-center justify-content-between">
        <label htmlFor={props.id}>{label}</label>{" "}
        {showFeedback ? (
          <div
            id={`${props.id}-feedback`}
            aria-live="polite"
            className="feedback text-sm"
          >
            {meta.error ? meta.error : "✓"}
          </div>
        ) : null}
      </div>
      <input
        {...props}
        {...field}
        aria-describedby={`${props.id}-feedback ${props.id}-help`}
        onFocus={handleFocus}
      />
      <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
        {helpText}
      </div>
    </div>
  );
};

const Consultation = () => {
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const phoneRegExp =
    /^\+?((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      monthlyBilling: "",
      businessName: "",
      phone: "",
      providers: "",
      totalAR: "",
      message: "",
    },
    onSubmit: async (values) => {
      await sleep(500);
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be less  than 20 characters")
        .required("Name is required")
        .matches(/^[a-zA-Z0-9]+$/, "Alpha Numeric characters only allowed"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      businessName: Yup.string().required("Business Name is required"),
      phone: Yup.string()
        .matches(phoneRegExp, "Phone number is invalid")
        .required("Phone is required"),
      monthlyBilling: Yup.string().required("Monthly Billing is required"),
      providers: Yup.string().required("Providers is required"),
      totalAR: Yup.string().required("Total AR is required"),
      message: Yup.string()
    }),
  });

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
                <p className="m-0">+1 (888) 285-2880</p>
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
          <FormikProvider value={formik}>
            <Form>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        type="text"
                        label="Name"
                        className="form-control"
                        id="name"
                        placeholder=""
                        name="name"
                      />
                    </div>
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        label="Email"
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder=""
                        name="email"
                      />
                    </div>
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        label="Monthly Billing"
                        type="text"
                        className="form-control"
                        id="monthlyBilling"
                        placeholder=""
                        name="monthlyBilling"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-6">
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        type="text"
                        label="Business Name"
                        className="form-control"
                        id="businessName"
                        placeholder=""
                        name="businessName"
                      />
                    </div>
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        type="tel"
                        label="Phone"
                        className="form-control"
                        id="phone"
                        placeholder=""
                        name="phone"
                      />
                    </div>
                    <div className="form-group my-3">
                      <TextInputLiveFeedback
                        type="text"
                        label="Providers"
                        className="form-control"
                        id="providers"
                        placeholder=""
                        name="providers"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="form-group mb-3">
                      <TextInputLiveFeedback
                        type="text"
                        label="Total AR"
                        className="form-control"
                        id="totalAR"
                        placeholder=""
                        name="totalAR"
                      />
                    </div>
                    <div className="form-outline">
                      <label className="form-label" htmlFor="message">
                        Your Message
                      </label>
                      <div className="d-flex justify-content-end">
                        <ErrorMessage
                          className="error"
                          name="message"
                          component="div"
                        />
                      </div>
                      <Field
                        as="textarea"
                        label="Your Message"
                        className="form-control"
                        id="message"
                        rows="4"
                        name="message"
                      />
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
            </Form>
          </FormikProvider>
        </motion.div>
      </div>
    </>
  );
};

export default Consultation;
