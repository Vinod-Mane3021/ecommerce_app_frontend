import { getProducts } from "@/apis/products";
import { ItemsProps, SectionsProps } from "@/types/navBarTypes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

interface Props {
  id: number;
  name: string;
  items: ItemsProps[];
  mainCategory: string;
}

const CategoriesSection = ({ id, name, items, mainCategory }: Props) => {
  const [productInfo, setProductInfo] = useState({
    mainCategory: "",
    category: "",
    subCategory: "",
  });

  // const {data, isLoading, error} = useQuery(["productsByCategories", productInfo], () => {
  //   if(productInfo.mainCategory && productInfo.category && productInfo.subCategory) {
  //     return getProducts(
  //       "", // name
  //       0, // min price
  //       Number.MAX_SAFE_INTEGER, // max price
  //       1, // page number
  //       50, // page size
  //       [productInfo.mainCategory, productInfo.category, productInfo.subCategory], // categories
  //       [] // brand
  //     )
  //   }
  // });



  // if(isLoading) (
  //   <p>Loading</p>
  // )
  // if(error) (
  //   <p>Got error</p>
  // )

  useEffect(() => {
    if (productInfo.mainCategory && productInfo.category && productInfo.subCategory) {
      console.log("productInfo : ", productInfo);
    }
  }, [productInfo]);

  // useEffect(() => {
  //   console.log("data data: ", data);
  // }, [data])

  return (
    <div>
      <p
        id={`${name}-heading`}
        className="font-bold text-gray-900 hover:underline cursor-pointer"
      >
        {name}
      </p>
      <ul
        role="list"
        aria-labelledby={`${name}-heading`}
        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
      >
        {items?.map((item: ItemsProps, index: number) => (
          <li key={index} className="flex">
            <Link
              onClick={() =>
                setProductInfo({
                  mainCategory: mainCategory,
                  category: name,
                  subCategory: item.name,
                })
              }
              href={`/productListing/${mainCategory}/${name}/${item.name}}`}
              className="hover:text-gray-800 hover:underline cursor-pointer"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesSection;
