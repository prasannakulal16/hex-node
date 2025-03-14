import React from "react";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Brands from "./Brands";
import Platform from "./Platform";
import Faq from "./Faq";
import Banner from "./Banner";
import {
  bannerClients,
  faqData,
  featureData,
  platformData,
  stats,
  testimonialData,
  videoLinks,
} from "../../utils/constants";
import VideoPlayer from "./VideoSection";
import StatsSection from "./Stats";

const HomePage = () => {
  return (
    <>
      <Banner bannerClients={bannerClients} />
      <Features featureData={featureData} />
      <VideoPlayer videoLinks={videoLinks} />
      <Faq faqData={faqData} />
      <Testimonials testimonials={testimonialData} />
      <StatsSection stats={stats} />
      <Brands />
      <Platform platforms={platformData} />
    </>
  );
};

export default HomePage;
