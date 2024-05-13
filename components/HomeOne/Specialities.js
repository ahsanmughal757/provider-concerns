import React from "react";
import Link from "next/link";

import {motion} from 'framer-motion'

const Specialities = () => {
  return (
    <div className="container">
      <motion.div initial={{opacity: 0}} viewport={{once: true}} whileInView={{ opacity: 1, transition: {delay: 0.2, duration: 0.5}}} className="speciality-item">
        <div className="row">
          <div className="section-title">
            <h2>Specialities</h2>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-heartbeat"
                viewBox="0 0 512 512"
                height="70"
                fill="#4d93e9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path>
              </svg>
              <h3>Cardiology</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-burn"
                viewBox="0 0 384 512"
                height="70"
                fill="#4d93e9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192 0C79.7 101.3 0 220.9 0 300.5 0 425 79 512 192 512s192-87 192-211.5c0-79.9-80.2-199.6-192-300.5zm0 448c-56.5 0-96-39-96-94.8 0-13.5 4.6-61.5 96-161.2 91.4 99.7 96 147.7 96 161.2 0 55.8-39.5 94.8-96 94.8z"></path>
              </svg>
              <h3>Hematology</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-microscope"
                viewBox="0 0 512 512"
                height="70"
                fill="#4d93e9"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"></path>
              </svg>
              <h3>Clinical Lab</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                height="70"
                fill="#0088cc"
                id="Layer_1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                stroke="#0088cc"
                strokeWidth="12.24"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <path d="M349.091,89.6c-6.982,0-11.636,4.655-11.636,11.636c0,6.982,4.655,11.636,11.636,11.636 c76.8,0,139.636,2.327,139.636,20.945c0,45.382-115.2,96.582-182.691,125.673c-8.145-6.982-13.964-23.273-13.964-36.073 c0-12.8,4.655-24.436,12.8-32.582c12.8-11.636,19.782-30.255,19.782-48.873c0-22.109-11.636-41.891-31.418-51.2 c-1.164-1.164-3.491-1.164-4.655-1.164c-16.291-1.164-33.745-2.327-50.036-3.491c-26.764-2.327-54.691-4.655-80.291-4.655 c-75.636,0-112.873,33.745-131.491,61.673C13.964,162.909,0,198.982,0,231.564c0,31.418,13.964,72.145,24.436,104.727 c2.327,5.818,3.491,11.636,5.818,16.291c2.327,6.982,4.655,13.964,5.818,19.782c10.473,32.582,17.455,58.182,48.873,58.182 c17.455,0,37.236-18.618,70.982-52.364c22.109-22.109,47.709-46.545,64-54.691c11.636-5.818,25.6-11.636,40.727-17.455 c5.818-2.327,8.145-9.309,5.818-15.127s-9.309-8.146-15.127-5.818c-15.127,6.982-29.091,12.8-40.727,17.455 c-20.945,9.309-46.545,34.909-70.982,59.345c-18.618,17.455-46.545,45.382-54.691,45.382c-11.636,0-16.291-8.146-25.6-41.891 c-2.327-5.818-3.491-12.8-5.818-19.782c-2.327-5.818-3.491-11.636-5.818-17.455c-10.473-31.418-23.273-69.818-23.273-96.582 c0-30.255,13.964-61.673,22.109-74.473c22.109-34.909,60.509-52.364,112.873-52.364c24.436,0,52.364,2.327,79.127,4.655 c16.291,1.164,32.582,2.327,48.873,3.491c10.473,5.818,16.291,16.291,16.291,29.091s-4.655,24.436-12.8,32.582 c-12.8,11.636-19.782,30.255-19.782,48.873c0,17.455,8.146,47.709,31.418,59.345c3.491,1.164,6.982,1.164,9.309,0 C411.927,238.545,512,190.836,512,133.818C512,91.927,452.655,89.6,349.091,89.6z"></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
              <h3>Hepatology</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-brain"
                height="70"
                fill="#4d93e9"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
              </svg>
              <h3>Nuerology</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="specialities-inner">
              <svg
                aria-hidden="true"
                className="e-font-icon-svg e-fas-hand-holding-medical"
                height="70"
                fill="#4d93e9"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M159.88,175.82h64v64a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-64h64a16,16,0,0,0,16-16v-64a16,16,0,0,0-16-16h-64v-64a16,16,0,0,0-16-16h-64a16,16,0,0,0-16,16v64h-64a16,16,0,0,0-16,16v64A16,16,0,0,0,159.88,175.82ZM568.07,336.13a39.91,39.91,0,0,0-55.93-8.47L392.47,415.84H271.86a16,16,0,0,1,0-32H350.1c16,0,30.75-10.87,33.37-26.61a32.06,32.06,0,0,0-31.62-37.38h-160a117.7,117.7,0,0,0-74.12,26.25l-46.5,37.74H15.87a16.11,16.11,0,0,0-16,16v96a16.11,16.11,0,0,0,16,16h347a104.8,104.8,0,0,0,61.7-20.27L559.6,392A40,40,0,0,0,568.07,336.13Z"></path>
              </svg>
              <h3>Primary Care</h3>
            </div>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="d-flex justify-content-center mt-5">
              <Link
                href="/specialities"
                className="btn btn-dark py-3 px-4 d-flex justify-content-center align-items-center more-services"
              >
                <span className="me-2">See More</span>
                <svg
                  style={{ height: "16px", width: "16px" }}
                  aria-hidden="true"
                  className="e-font-icon-svg e-fas-arrow-alt-circle-right"
                  viewBox="0 0 512 512"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Specialities;
