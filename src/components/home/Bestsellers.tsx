"use client";
import { BestsellersProps } from "@/types/bestsellersTypes";
import React, { useEffect, useState } from "react";
import ProductItem from "../all-sweatshirts/ProductItem";
import Link from "next/link";
import { bestsellersApi } from "@/apis/bestsellers";
import { useQuery } from "react-query";

const Bestsellers = () => {
  const { data, isLoading, isError } = useQuery(
    "bestSellerData",
    bestsellersApi
  );

  if (isLoading)
    return (
      <h1 className="px-4 md:px-8 lg:px-16">Fetching data please wait...</h1>
    );

  if (isError)
    return (
      <h1 className="px-4 md:px-8 lg:px-16">Got error while fetching data</h1>
    );

  return (
    <>
      <p className="px-4 md:px-8 lg:px-16 pt-8 font-bold text-2xl">
        Shop Our Bestsellers
      </p>
      <>
        <ul className="flex flex-row overflow-x-auto px-4 md:px-16 scroll-smooth overflow-hidden gap-2 scrollbar-hide">
          {data.map((Item: BestsellersProps) => (
            <Link key={Item.productId} href={`product/${Item.productId}`}>
              <ProductItem
                id={Item.productId}
                image={Item.productImage}
                title={Item.productName}
                price={Item.productPrice}
                originalPrice={Item.productOriginalPrice}
                discount={Item.productDiscount}
                colors={Item.productColorList}
                quantity={Item.productTotalQuantity}
                customerCartQuantity={0}
              />
            </Link>
          ))}
        </ul>
      </>
    </>
  );
};

export default Bestsellers;
