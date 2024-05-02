import React from "react";
import { useRouter } from "next/router";

import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
// import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import HospitalBillingContent from "../components/Services/HospitalBillingContent";

const ServiceDetails = () => {
  const router = useRouter(); 
  const pathname = router.asPath;

  return (
    <>
      <TopHeader />

      <Navbar />

      {/* <PageBanner
        pageTitle="Service Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Service Details"
        bgImage="page-title-one"
      /> */}

      
      <HospitalBillingContent />

      <Footer />
    </>
  );
};

export default ServiceDetails;
