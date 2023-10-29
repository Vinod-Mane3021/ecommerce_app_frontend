import React from 'react'
interface Props {
    discount: number
}

const DiscountOfferBox = ({discount} : Props) => {
  return (
    <div className='flex w-fit items-center justify-center bg-green-800 py-[1px] px-[2.5px] md:py-[2px] md:px-[5px] rounded-md'>
        <p className='text-[8px] sm:text-xs text-white'>{discount}% off</p>
    </div>
  )
}

export default DiscountOfferBox