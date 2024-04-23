import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

import { motion } from "framer-motion";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="home-slider"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      <img
                        src="/images/home-one/home-slider1.png"
                        alt="Shape"
                      />
                    </div>

                    <motion.h1
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          ease: "easeIn",
                        },
                        type: "spring",
                      }}
                    >
                      Empowering Practices Optimizing Revenues
                    </motion.h1>
                    <motion.p
                      initial={{ x: 30, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          ease: "easeIn",
                        },
                        type: "spring",
                      }}
                    >
                      We provide Top Notch Healthcare financial billing
                      solutions that maximize your revenue
                    </motion.p>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          delay: 0.3,
                          // ease: "easeIn",
                        },
                        type: "spring",
                        // stiffness: 100,
                      }}
                      className="common-btn"
                    >
                      <Link href="/appointment" className="click-call">
                        Click to Call
                      </Link>
                      <Link href="/about" className="cmn-btn-right">
                        Make Appointment
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two">
                      <img
                        src="/images/home-one/home-slider2.png"
                        alt="Shape"
                      />
                    </div>
                    <h1>Caring Health is Important Than All</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slider-bg.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-three">
                      <img
                        src="/images/home-one/home-slider3.png"
                        alt="Shape"
                      />
                    </div>
                    <h1>We Offer Highly Treatments</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    <div className="common-btn">
                      <Link href="/appointment">Get Appointment</Link>
                      
                      <Link href="/about" className="cmn-btn-right">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default HeroSlider;
