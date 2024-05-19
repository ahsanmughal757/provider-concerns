import React from "react";
import axios from "axios";
import Link from "next/link";
import {
  Form,
  Field,
  FormikProvider,
  ErrorMessage,
  useFormik,
} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import TextInputLiveFeedback from "../Forms/TextInputLiveFeedback";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // YUP Validation Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  // Handle Form Submit
  const handleSubmit = async (values) => {
    // alert(JSON.stringify(values));
    Swal.showLoading();
    await axios
      .post("/api/subscribe", {
        email: values.email,
      })
      .then((res) => {
        Swal.fire({
          title: "Done",
          text: "Subscribed!",
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
  };

  // Formik Hook
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <>
      <footer className="pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="footer-item">
                <div className="footer-contact pe-2">
                  <h3>Contact Us</h3>
                  <ul>
                    <li>
                      <i className="icofont-ui-message"></i>
                      <a href="mailto:andrewhall0552@gmail.com">
                      support@providerconcerns.com
                      </a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+18882852880">Call: +1 (888) 285-2880 </a>
                    </li>
                    <li>
                      <i className="icofont-location-pin"></i>
                      5900 Balcones Dr 16645, Austin, Texas 78731, USA
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-2">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link href="/about">About us</Link>
                    </li>
                    <li>
                      <Link href="#services">Services</Link>
                    </li>
                    <li>
                      <Link href="/specialities">Specialities</Link>
                    </li>
                    <li>
                      <Link href="#what-we-do">What we do</Link>
                    </li>
                    <li>
                      <Link href="#testimonials">Testimonials</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-quick">
                  <h3>Our Services</h3>
                  <ul>
                    <li>
                      <Link href="/medical-billing">Medical Billing</Link>
                    </li>
                    <li>
                      <Link href="/laboratory-billing">Laboratory Billing</Link>
                    </li>
                    <li>
                      <Link href="/physical-billing">Physician Billing</Link>
                    </li>
                    <li>
                      <Link href="/hospital-billing">Hospital Billing</Link>
                    </li>
                    {/* <li>
                      <Link href="/dental-billing">Dentail Billing</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <FormikProvider value={formik}>
                  <Form>
                    <div className="footer-feedback">
                      <h3>Subscribe to Newsletter</h3>
                      
                      <div className="form-group">
                        <TextInputLiveFeedback
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      
                      <div className="text-left">
                        <button type="submit" className="btn feedback-btn">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-item">
            <p>
              Copyright &copy; {currentYear} Provider Concerns Solutions{" "}
              {/* <a href="https://hibootstrap.com/" target="_blank">
                HiBootstrap
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
