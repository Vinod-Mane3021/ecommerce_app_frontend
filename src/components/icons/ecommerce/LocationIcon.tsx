import LocationSvg from '../../../../public/svgIcons/LocationSvg'
import { IconProps } from '@/types/IconType'
import React from 'react'

const LocationIcon = ({width, height} : IconProps) => {
  return (
    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300'>
        <LocationSvg
         height={height}
         width={width}
        />
    </div>
  )
}

export default LocationIcon