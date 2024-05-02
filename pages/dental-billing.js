import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import DentalBillingContent from "../components/Services/DentalBillingContent";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <DentalBillingContent />

      <Footer />
    </>
  );
};

export default Page;
