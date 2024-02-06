'use client'
import Footer from "@/components/footer/Footer";
import ProductItem from "../../components/all-sweatshirts/ProductItem";
import { allSweatshirtsData } from "@/utilities/data/productsCategory/all-sweatshirts";
import Link from "next/link";
import React from "react";
import { preload } from "react-dom";
import { stringify } from "postcss";
import { usePathname } from "next/navigation";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import FilterIcon from "@/components/icons/ecommerce/FilterIcon";

const allSweatshirts = () => {

  const handleFilter = () => {
    console.log('handleFilter')
  }

  const handleProductColor = () => {
    console.log('handleProductColor')
  }

  const handleProductType = () => {
    console.log('handleProductType')
  }
  return (
    <React.Fragment>
      <p className="px-4 md:px-16 pt-10 text-2xl font-bold">All Sweatshirts</p>
      {/* filters */}
      <div className="flex flex-col sm:flex-row gap-5 justify-between py-9 px-4 md:px-8 lg:px-16">

        <div className="flex gap-4 text-sm font-semibold items-center">
          <span className="flex gap-1 items-center justify-center hover:cursor-pointer" onClick={handleFilter}>
            <FilterIcon/>
            <p className="hidden sm:block hover:cursor-pointer">Sort and filter</p>
          </span>
          <p className="hover:cursor-pointer" onClick={handleProductColor}>color</p>
          <p className="hover:cursor-pointer" onClick={handleProductType}>Product type</p>
        </div>
        {/* Total items */}
        <p>{allSweatshirtsData.length} results</p>
      </div>
      {/* Products */}
      <ul className="grid mb-6 grid-cols-2 justify-center lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-6 px-4 md:px-8 lg:px-16">
        {allSweatshirtsData.map((Item: allSweatshirtProductTypes, index: number) => { 
          const encodedProduct = encodeURIComponent(JSON.stringify(Item))
          return(//encodeURIComponent(JSON.stringify(Item))
            <Link key={index} href={`/product/${encodedProduct}`}
            >
              <ProductItem
                id={Item.id}
                image={Item.image}
                title={Item.title}
                price={Item.price}
                originalPrice={Item.originalPrice}
                discount={Item.discount}
                quantity={Item.quantity}
                />
              </Link>
        )})}
      </ul>
      {/* navigate to main page again */}
      <div className="bg-lightGray mb-6 flex items-center justify-center py-12">
        <span className="border border-darkGray flex items-center justify-center px-2 text-xs font-semibold py-1 rounded-full bg-white gap-2">
          <Link href="/"><p className="text-gray-400 uppercase hover:underline hover:cursor-pointer font-bold">Lacoste</p></Link>
          <p>/</p>
          <p>All Sweatshirts</p>
        </span>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default allSweatshirts;
