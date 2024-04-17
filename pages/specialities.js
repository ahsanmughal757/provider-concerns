import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import Specialities from "../components/Specialities/Specialities";
import GoogleMap from "../components/Specialities/GoogleMap";

const Index = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <Specialities />

      <GoogleMap />

      <Footer />
    </>
  );
};

export default Index;
