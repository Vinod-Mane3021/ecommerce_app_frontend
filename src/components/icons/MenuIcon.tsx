import MenuIconSvg from '@/utilities/svgIcons/MenuIconSvg'
import React from 'react'
import CloseIcon from './CloseIcon'

const MenuIcon = () => {
  return (
    <>
    <div className='lg:hidden p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300'>
        <MenuIconSvg/>
    </div>
    {/* <div className='lg:hidden p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300'>
        <CloseIcon/>
    </div> */}
    </>
  )
}

export default MenuIcon