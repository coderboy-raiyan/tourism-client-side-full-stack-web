import React from "react";
import ChooseUs from "../ChooseUs/ChooseUs";
import Banner from "./../Banner/Banner";
import CustomerFeed from "./../CutomerFeed/CustomerFeed";
import Services from "./../Services/Services";

const Home = () => {
  return (
    <main>
      <Banner></Banner>
      <ChooseUs></ChooseUs>
      <Services></Services>
      <CustomerFeed></CustomerFeed>
    </main>
  );
};

export default Home;
