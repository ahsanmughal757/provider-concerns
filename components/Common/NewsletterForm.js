import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";

const NewsletterForm = () => {
  return (
    <>
      <div className="newsletter-area ptb-100">
        <div className="container">
          <div className="row newsletter-wrap align-items-center">
            <div className="col-lg-6">
              <div className="newsletter-item">
                <h2>Join Our Newsletter</h2>
                <p>And Get The Best Billing Solutions for Your Practice</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newsletter-item">
                <Formik
                  initialValues={{ email: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Email is Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  className="newsletter-form"
                >
                  <Form className="newsletter-form">
                    <Field
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                    />

                    <button className="btn newsletter-btn" type="submit">
                      Subscribe
                    </button>
                    <ErrorMessage className="error" name="email" component="div" />
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterForm;
