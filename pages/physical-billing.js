import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PhysicalBillingContent from "../components/Services/PhysicalBillingContent";

const Page = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <PhysicalBillingContent />

      <Footer />
    </>
  );
};

export default Page;
