import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
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
                      <a href="mailto:support@providerconcerns.com">support@providerconcerns.com</a>
                    </li>
                    <li>
                      <i className="icofont-stock-mobile"></i>
                      <a href="tel:+18882852880">Call:  +1 (888) 285-2880 </a>
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
                      <Link href="/about">Services</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Specialities</Link>
                    </li>
                    <li>
                      <Link href="/faq">Blogs</Link>
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
                      <Link href="/service-details">Medical Billing</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Laboratory Billing</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Physician Billing</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Hospital Billing</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-feedback">
                  <h3>Feedback</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="your_message"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <div className="text-left">
                      <button type="submit" className="btn feedback-btn">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
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
