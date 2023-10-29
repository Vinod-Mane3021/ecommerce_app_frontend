import Link from 'next/link'
import React from 'react'

interface Props {
    handleViewBag: () => void
}

const ViewBagButton = ({ handleViewBag } : Props) => {
  return (
    <Link href="/checkout">
        <button onClick={handleViewBag} className='text-sm  py-3 px-5 my-2 w-fit text-lightGray bg-[#105a33] hover:bg-[#187c48] rounded-full duration-500'>
        View Bag
        </button>
    </Link>
  )
}

export default ViewBagButton