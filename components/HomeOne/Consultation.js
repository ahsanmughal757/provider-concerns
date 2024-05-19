import React from "react";
import axios from "axios";
import { Form, Field, FormikProvider, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import TextInputLiveFeedback from "../Forms/TextInputLiveFeedback";

const domain =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_DOMAIN
    : process.env.NEXT_PUBLIC_LOCAL_DOMAIN;

const Consultation = () => {
  // Phone Number Validation
  const phoneRegExp =
    /^\+?((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

  // YUP Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "Must be less  than 20 characters")
      .required("Name is required")
      // .matches(/^[a-zA-Z0-9]+$/, "Alpha Numeric characters only allowed"),
      .matches(/^[a-zA-Z0-9\s]+$/, "Alpha Numeric characters only allowed"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    businessName: Yup.string().required("Business Name is required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is invalid")
      .required("Phone is required"),
    monthlyBilling: Yup.string(),
    providers: Yup.string(),
    totalAR: Yup.string().required("Total AR is required"),
    message: Yup.string(),
  });

  // Handle Form Submit
  const handleSubmit = async (values) => {
    // alert(JSON.stringify(values));
    Swal.showLoading();

    // Consultation Request Email
    await axios
      .post(`/api/request-consultation`, {
        name: values.name,
        email: values.email,
        number: values.phone,
        businessName: values.businessName,
        text: values.message,
      })
      .then((res) => {
        if (
          res?.data?.message === "EMAIL_SEND_ERROR" ||
          res?.data?.message === "Error_proccessing_charge"
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          return;
        }

        Swal.fire({
          title: "Done",
          text: "Request Submitted Successfully!",
          icon: "success",
        });

        formik.resetForm();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });

    // Send Consultation Response Email
    await axios
      .post(`/api/consultation-response`, {
        name: values.name,
        email: values.email,
      })
      .then((res) => {
        if (
          res?.data?.message === "EMAIL_SEND_ERROR" ||
          res?.data?.message === "Error_proccessing_charge"
        ) {
          console.error("Error sending response to user!");
          return;
        }
        console.log("Response successfully sent to user!");
      })
      .catch((err) => {
        console.error("Error sending response to user!");
      });
  };

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      monthlyBilling: "1k-30k",
      businessName: "",
      phone: "",
      providers: "1-5",
      totalAR: "",
      message: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
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
                      {/* <TextInputLiveFeedback
                        label="Monthly Billing"
                        type="text"
                        className="form-control"
                        id="monthlyBilling"
                        placeholder=""
                        name="monthlyBilling"
                      /> */}

                      <div className="position-relative">
                        <label htmlFor="monthlyBilling">Monthly Billing</label>

                        <ErrorMessage
                          className="error position-absolute end-0"
                          name="monthlyBilling"
                          component="span"
                        />
                      </div>
                      <Field
                        id="monthlyBilling"
                        name="monthlyBilling"
                        as="select"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="Less than 10k">Less than 10k</option>
                        <option value="10k-50k">10k-50k</option>
                        <option value="More than 50k">More than 50k</option>
                      </Field>
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
                      <div className="position-relative">
                        <label htmlFor="providers">Providers</label>

                        <ErrorMessage
                          className="error position-absolute end-0"
                          name="providers"
                          component="span"
                        />
                      </div>
                      <Field
                        id="providers"
                        name="providers"
                        as="select"
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option value="1-5">1-5</option>
                        <option value="5-10">5-10</option>
                        <option value="More than 10">More than 10</option>
                      </Field>
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
