import React from 'react'

interface Props {
    handleAddToCart: () => void
}

const AddToCartButton = ({ handleAddToCart } : Props) => {
  return (
    <button 
        onClick={handleAddToCart}
        className='bg-green-200 px-2 py-1 rounded-md hover:bg-green-800 hover:text-white duration-300'>
        <p className='text-sm'>Add to cart</p>
    </button>
  )
}

export default AddToCartButton