import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import LaboratoryBillingContent from "../components/Services/LaboratoryBillingContent";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <LaboratoryBillingContent />

      <Footer />
    </>
  );
};

export default Page;
