import MenuIconSvg from '../../../../public/svgIcons/MenuIconSvg'
import React from 'react'
import CloseIcon from '../other/CloseIcon'

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