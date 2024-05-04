import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";
import Link from "next/link";

import { motion } from "framer-motion";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="text-white h5 ${className}">0${index + 1}</span>`,
        }}
        modules={[Pagination, Navigation, EffectFade, Autoplay]}
        className="home-slider relative"
      >
        <SwiperSlide>
          <div
            className="slider-item"
            style={{
              backgroundImage: `url(/images/home-one/home-slide-1.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape">
                      {/* <img
                        // src="/images/home-one/doctors-slide-1.png"
                        alt="Shape"
                      /> */}
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
                      className="lead"
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
                      <Link href="tel:+18882852880">Click to Call</Link>
                      <Link href="#contact" className="cmn-btn-right">
                        Make Appointment
                      </Link>
                    </motion.div>
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
              backgroundImage: `url(/images/home-one/home-slide-2.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-two">
                      {/* <img
                        src="/images/home-one/home-slider2.png"
                        alt="Shape"
                      /> */}
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
                    >Medical Practices Revenue Maximization</motion.h1>
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
                      className="lead"
                    >
                      We provide professional medical billing services designed
                      to maximize revenue for your medical business, enhancing
                      your profit potential.
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
                      <Link href="tel:+18882852880">Click to Call</Link>
                      <Link href="#contact" className="cmn-btn-right">
                        Make Appointment
                      </Link>
                    </motion.div>
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
              backgroundImage: `url(/images/home-one/home-slide-3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="slider-text">
                    <div className="slider-shape-three">
                      {/* <img
                        src="/images/home-one/home-slider3.png"
                        alt="Shape"
                      /> */}
                    </div>
                    <h1>Expert Dental Billing Services</h1>
                    <p className="lead">
                      We revolutionize dental practices by ensuring financial
                      success through innovative billing solutions, optimizing
                      billing procedures, and enhancing profits.
                    </p>

                    <div className="common-btn">
                      <Link href="tel:+18882852880​">Click to Call</Link>

                      <Link href="#contact" className="cmn-btn-right">
                        Make Appointment
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
