import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import HospitalBillingContent from "../components/Services/HospitalBillingContent";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HospitalBillingContent />

      <Footer />
    </>
  );
};

export default Page;
