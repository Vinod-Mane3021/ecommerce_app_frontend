import React from 'react'

interface Props {
  handleAddToShoppingBag: () => void
}

const AddToShoppingBagButton = ({ handleAddToShoppingBag } : Props) => {
  return (
    <button onClick={handleAddToShoppingBag} className='text-sm w-full font-semibold px-4 py-3 text-white md:px-5 md:py-4 my-2 hover:text-lightGray bg-[#105a33] hover:bg-[#187c48] rounded-full duration-500'>
      Add to shopping bag
    </button>
  )
}

export default AddToShoppingBagButton