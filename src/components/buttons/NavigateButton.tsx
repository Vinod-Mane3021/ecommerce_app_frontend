'use client'
import React, { useState } from 'react'
import LongArrowRightIcons from '../icons/LongArrowRightIcons'
import { classNames } from '@/utilities/classNames/classNames'

const NavigateButton = () => {

  const [color, setColor] = useState('#000')

  return (
    <button className='bg-white px-8 py-4 rounded-full hover:bg-darkBlack duration-300'
      onMouseEnter={() => setColor('#fff')}
      onMouseLeave={() => setColor("#000")}
      >
      <LongArrowRightIcons heightWidth='16px' color={color}/>
    </button>
  )
}

export default NavigateButton

