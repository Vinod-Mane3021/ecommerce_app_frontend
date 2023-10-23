import Header from "@/components/Header";
import NavBar from "@/components/navBar/NavBar";
import React from "react";
import image from "../../../public/images/HomePage/homePageImg.png";
import Link from "next/link";
import Banner from "./Banner";
import LacosteEssentials from "./LacosteEssentials";
import LacosteBandier from "./LacosteBandier";
import Bestsellers from "./Bestsellers";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <Banner/>
      <LacosteEssentials/>
      <LacosteBandier/>
      <Bestsellers/>
    </div>
  );
};

export default HomePage;
