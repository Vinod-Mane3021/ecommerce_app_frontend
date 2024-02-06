"use client";
import Footer from "@/components/footer/Footer";
// import { allSweatshirtsData } from "@/utilities/data/productsCategory/all-sweatshirts";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { preload } from "react-dom";
import { stringify } from "postcss";
import { usePathname } from "next/navigation";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import FilterIcon from "@/components/icons/ecommerce/FilterIcon";
import { ProductType, getProducts } from "@/apis/products";
import { useQuery } from "react-query";
import { ProductsProps } from "@/apis/products";
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/all-sweatshirts/ProductItem";
import Products from "@/app/productListing/[mainCategory]/[category]/[subCategory]/page";

interface Props {
  params: {
    category: string;
  };
}

const SaleProducts = (params: Props) => {
  const p = params.params;

  console.log("category ::::", p.category)

  const parameters = {
    mainCategory: p.category,
    category: "",
    subCategory: ""
  };

  return (
    <>
    <p>jksdfhbvjklzhxbcvkjb</p>
      {/* <Products params={parameters} /> */}
    </>
  );
};

export default SaleProducts;
