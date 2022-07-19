import React from "react";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import Reviews from "./Reviews/Reviews";


const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Brands></Brands>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
