'use client'
import React, { useState } from 'react'
import LongArrowRightIcons from '@/components/icons/arrow/LongArrowRightIcons'
import { classNames } from '@/utilities/functions/classNames'

const NavigateButton = () => {

  const [color, setColor] = useState('#000')

  return (
    <button className='bg-lightGray px-5 py-2 sm:px-6 sm:py-3 lg:px-7 lg:py-4 rounded-full border-[0.3px] border-transparent hover:border-white hover:bg-darkGray duration-300'
      onMouseEnter={() => setColor('#fff')}
      onMouseLeave={() => setColor("#000")}
      >
      <LongArrowRightIcons heightWidth='16px' color={color}/>
    </button>
  )
}

export default NavigateButton

