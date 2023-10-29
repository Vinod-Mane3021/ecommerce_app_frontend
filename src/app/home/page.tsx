import React from "react";
import Banner from "../../components/home/Banner";
import LacosteEssentials from "../../components/home/LacosteEssentials";
import LacosteCollab from "../../components/home/LacosteCollab";
import Bestsellers from "../../components/home/Bestsellers";
import NowTrending from "@/components/home/NowTrending";
import LacosteInside from "@/components/home/LacosteInside";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <Banner/>
      <LacosteEssentials/>
      <LacosteCollab/>
      <Bestsellers/>
      <NowTrending/>
      <LacosteInside/>
      <Footer/>
    </div>
  );
};

export default HomePage;
