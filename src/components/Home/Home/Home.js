import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Banner from "./../Banner/Banner";
import Services from "./../Services/Services";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <ChooseUs />
      <Services></Services>
    </main>
  );
};

export default Home;
