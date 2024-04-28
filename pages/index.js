import React from "react";
import TopHeader from "../components/_App/TopHeader";
import Navbar from "../components/_App/Navbar";
import HeroSlider from "../components/HomeOne/HeroSlider";
import Stats from "../components/HomeOne/Stats";
import AboutSection from "../components/HomeOne/AboutSection";
import Services from "../components/HomeOne/Services";
import OurExpertise from "../components/HomeOne/OurExpertise";
import LatestBlogPost from "../components/Common/LatestBlogPost";
import NewsletterForm from "../components/Common/NewsletterForm";
import Footer from "../components/_App/Footer";
import Consultation from "../components/HomeOne/Consultation";
import GoogleMap from "../components/HomeOne/GoogleMap";
import Benefits from "../components/HomeOne/Benefits";
import Specialities from "../components/HomeOne/Specialities";
import TestimonialSlider from "../components/Common/TestimonialSlider";

const Index = () => {
  return (
    <>
      <TopHeader />

      <Navbar />

      <HeroSlider />

      <Stats />

      <Consultation />

      <AboutSection />

      <Services />

      <OurExpertise />

      <Specialities />

      <Benefits />

      <TestimonialSlider />

      {/* <VideoIntro /> */}

      {/* <OurDoctors /> */}

      <LatestBlogPost />

      <GoogleMap />

      <NewsletterForm />

      <Footer />
    </>
  );
};

export default Index;
