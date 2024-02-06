
import React from 'react'
import TrashIcon from '@/components/icons/other/TrashIcon'
import AddToWishlist from './AddToWishlist'

const MenuToggle = () => {
  return (
    <div className='absolute rounded-lg shadow-md border border-1 overflow-hidden z-10 bg-white right-2 top-5'>

      <div className='text-sm flex flex-col text-darkGray items-start'> 

      <button className='flex px-6 gap-2 py-3 w-full justify-start items-center bg-white hover:bg-lightGray'>
        <AddToWishlist heightWidth="19px"/>
        <p className=''>Move to wishlist</p>
      </button>

        <div className='border w-full border-t-gray-200 border-b-0 h-0 '/>

      <button className='flex px-6 gap-2 py-3 w-full justify-start items-center bg-white hover:bg-lightGray'>
        <TrashIcon heightWidth="19px"/>
        <p className=''>Remove</p>
      </button>
      
      </div>
    </div>
  )
}

export default MenuToggle