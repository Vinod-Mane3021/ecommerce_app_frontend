import React from 'react'

interface Props {
    TOTAL_CART_ITEM_PRICE: number;
}

const ProductPricing = ({ TOTAL_CART_ITEM_PRICE } : Props) => {
  return (
    <>
        <div className="flex w-full flex-col gap-8 ">
          <p className="items-start font-extrabold">Order summary</p>
          <span className="text-xs font-bold text-slate-500 flex gap-1 items-center">
            PRODUCTS •
            <p className="text-sm text-slate-600"> ${TOTAL_CART_ITEM_PRICE}</p>
          </span>
        </div>

        <span className="border-gray-300 w-full px-10 border-[1px]" />

        <div className="w-full flex flex-col gap-3 text-slate-700"></div>
      </>
  )
}

export default ProductPricing