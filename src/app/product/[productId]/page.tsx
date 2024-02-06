"use client";
import DiscountOfferBox from "@/components/home/DiscountOfferBox";
import { allSweatshirtsData } from "@/utilities/data/productsCategory/all-sweatshirts";
import React, { useState } from "react";
import AddToShoppingBagButton from "@/components/buttons/AddToShoppingBagButton";
import PriceAndRating from "@/components/all-sweatshirts/PriceAndRating";
import SelectProductColor from "@/components/all-sweatshirts/SelectProductColor";
import SelectProductSize from "@/components/all-sweatshirts/SelectProductSize";
import ProductFooterText from "@/components/all-sweatshirts/ProductFooterText";
import { useAppDispatch } from "@/store/hooks";
import { addToCart } from "@/store/features/cartSlice";
import { allSweatshirtProductTypes } from "@/types/productTypes";
import ViewBagButton from "@/components/buttons/ViewBagButton";

interface Props {
    params: {
      productId: string;
    }
  }

//{product: allSweatshirtProductTypes}
const ProductPage = ({ params }: Props ) => {
  const productId = params?.productId
  console.log("decodedProduct n : " + productId)
  const [isProductDispatched, setIsProductDispatched] = useState(false)

  const dispatch = useAppDispatch();

  const handleAddToShoppingBag = (item: allSweatshirtProductTypes) => {
    dispatch(addToCart({
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
      originalPrice: item.originalPrice,
      discount: item.discount,
      colors: item.colors,
      quantity: item.quantity,
      customerCartQuantity: 1
    }))
    setIsProductDispatched(true)
  }

  

  const handleViewBag = () => {
    console.log("handle view bag")
  }

  return (
    <>
        <div className="flex flex-col lg:flex-row px-4 md:px-8 text-black items-center lg:px-16 py-10 justify-center gap-5 lg:gap-16 xl:gap-36">
          
        </div>
    </>
  );
};

export default ProductPage;


// <img className="md:h-[500px] xl:h-[600px] w-fit" src={Product.image} alt={Product.title} />
//           <div className="flex flex-col gap-3 md:gap-5 w-full lg:w-[35%]">
//               <div className="w-fit flex flex-col gap-1 lg:gap-5"> 
//                 <DiscountOfferBox discount={Product.discount} />
//                 <p className=" md:text-lg">{Product.title}</p>
//                 <p className="text-xs md:text-sm text-darkGray">men - Gray</p>                   
//               </div>
//               {/* price and rating */}
//               <PriceAndRating price={Product.price} originalPrice={Product.originalPrice}/>
//               {/* select product color */}
//               <SelectProductColor image={Product.image}/>
//               {/* select product size */}
//               <SelectProductSize/>
//               <div className="w-full flex justify-center items-center">
//                 {!isProductDispatched && <AddToShoppingBagButton handleAddToShoppingBag={() => handleAddToShoppingBag(Product)}/>}
//                 {isProductDispatched && <ViewBagButton handleViewBag={handleViewBag}/>}
//               </div>
//               <ProductFooterText/>
//             </div>
