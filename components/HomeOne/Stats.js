import React from "react";

const Stats = () => {
  return (
    <>
      <div className="counter-area">
        <div className="container">
          <div className="row counter-bg">
            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-patient-bed"></i> */}
                <h3 className="counter">30%</h3>
                <p>Revenue Increase</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-people"></i> */}
                <h3>
                  <span className="counter">95%</span>
                </h3>
                <p> Clean Claim Rate</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-doctor-alt"></i> */}
                <h3 className="counter">30%</h3>
                <p>Reduction in AR</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-3">
              <div className="counter-item">
                {/* <i className="icofont-badge"></i> */}
                <h3 className="counter">80%</h3>
                <p>Collection Ratios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
