import React from 'react'
interface Props {
    discount: number
}

const DiscountOfferBox = ({discount} : Props) => {
  return (
    <div className='flex items-center justify-center bg-green-800 py-[2px] px-[5px] rounded-md'>
        <p className='text-xs text-white'>{discount}% off</p>
    </div>
  )
}

export default DiscountOfferBox