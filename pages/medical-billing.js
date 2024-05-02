import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import MedicalBillingContent from "../components/Services/MedicalBillingContent";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <MedicalBillingContent />

      <Footer />
    </>
  );
};

export default Page;
