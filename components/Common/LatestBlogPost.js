import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LatestBlogPost = () => {
  return (
    <>
      <div id="blogs" className="blog-area pt-100 pb-70 overflow-hidden">
        <div className="container">
          <div className="section-title">
            <h2>Our Latest Blogs</h2>
          </div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: [null, 50], opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.2 },
            }}
            className="row justify-content-center"
          >
            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog1.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog-details">
                      In this hospital there are special surgeon
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et..
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog2.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog-details">
                      World AIDS Day, designated on 1 December
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et..
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="blog-item">
                <div className="blog-top">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog3.jpg" alt="Blog" />
                  </Link>
                </div>
                <div className="blog-bottom">
                  <h3>
                    <Link href="/blog-details">
                      More than 80 clinical trials launch to test coronavirus
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                    dolore smod tempor incididunt ut labore et..
                  </p>
                  <ul>
                    <li>
                      <Link href="/blog-details">
                        Read More <i className="icofont-long-arrow-right"></i>
                      </Link>
                    </li>
                    <li>
                      <i className="icofont-calendar"></i>
                      Jan 03, 2022
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
