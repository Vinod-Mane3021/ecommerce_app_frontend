import React from "react";
import Banner from "../../components/home/Banner";
import LacosteEssentials from "../../components/home/LacosteEssentials";
import LacosteBandier from "../../components/home/LacosteBandier";
import Bestsellers from "../../components/home/Bestsellers";
import NowTrending from "@/components/home/NowTrending";
import LacosteInside from "@/components/home/LacosteInside";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <Banner/>
      <LacosteEssentials/>
      <LacosteBandier/>
      <Bestsellers/>
      <NowTrending/>
      <LacosteInside/>
      <Footer/>
    </div>
  );
};

export default HomePage;
