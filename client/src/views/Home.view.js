import React from "react";

//Components
import Header from "../components/Header.component";
import Banner from "../components/Banner.component";
import Stats from "../components/Stats.component";
import Footer from "../components/Footer.component";
import Carousel from "../components/MapCards.component";

//Config
import { styledObjectExample } from "../assets/config/config";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Carousel styledObject={styledObjectExample} />
      <Stats />
      <Footer />
    </>
  );
}
