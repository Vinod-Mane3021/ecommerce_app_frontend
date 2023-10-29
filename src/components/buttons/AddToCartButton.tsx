import React from 'react'

interface Props {
    handleAddToCart: () => void
}

const AddToCartButton = ({ handleAddToCart } : Props) => {
  return (
    <button 
        onClick={handleAddToCart}
        className='bg-green-200 px-[4px] py-[3px] md:px-2 md:py-1 rounded-md hover:bg-green-800 hover:text-white duration-300'>
        <p className='text-[10px] sm:text-xs md:text-sm'>Add to cart</p>
    </button>
  )
}

export default AddToCartButton