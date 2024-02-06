import Link from 'next/link'
import React from 'react'
import MasterCardIcon from '@/components/icons/payments/MasterCardIcon'

const SpacialOffer = () => {
  return (
    <div className="flex bg-white py-3 px-2 items-center justify-center gap-2 mt-2">
            <p className="text-sm">
              Pay as low as $126/mo.{" "}
              <Link className="text-gray-500 underline" href="#">
                Learn more
              </Link>
            </p>
            <span className=" bg-red-200 h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <MasterCardIcon />
            </span>
          </div>
  )
}

export default SpacialOffer