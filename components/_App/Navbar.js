import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area sticky-top">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-xl navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/pcs-logo.jpg"
                  alt="logo"
                  height="67px"
                  width="194px"
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${
                        currentPath == "/about/" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#services" className="nav-link">
                      Services
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/specialities" className="nav-link">
                      Specialities
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#what-we-do" className="nav-link">
                      What we do
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link href="#blogs" className="nav-link">
                      Blogs
                    </Link>
                  </li> */}

                  <li className="nav-item">
                    <Link
                      href="#contact"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="schedule-container">
                    <Link
                      href="#contact"
                      className={`btn schedule-btn nav-link ml-5${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      {/* <button type="button" className="btn schedule-btn"> */}
                      Schedule demo
                      {/* </button> */}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div className="nav-srh">
                <form>
                  <input32  
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Search..."
                  />

                  <button className="search-icon icon-search">
                    <i className="icofont-search-1"></i>
                  </button>
                </form>
              </div> */}

              {/* <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-3 col-sm-12">
                  <button type="button" className="btn schedule-btn">
                    Schedule demo
                  </button>
                </div>
              </div> */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
