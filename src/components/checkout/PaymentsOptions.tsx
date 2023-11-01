import React from 'react'
import VisaIcon from '../icons/payments/VisaIcon'
import ApplePayIcon from '../icons/payments/ApplePayIcon'
import MasterCardIcon from '../icons/payments/MasterCardIcon'
import AmexIcon from '../icons/payments/AmexIcon'
import DiscoverIcon from '../icons/payments/DiscoverIcon'

const PaymentsOptions = () => {
  return (
    <div className="flex w-full justify-center overflow-visible gap-2 mt-2">
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <VisaIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <ApplePayIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <MasterCardIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <AmexIcon />
            </div>
            <div className=" bg-white h-7 w-12 rounded-md flex items-center justify-center overflow-hidden relative ">
              <DiscoverIcon />
            </div>
          </div>
  )
}

export default PaymentsOptions