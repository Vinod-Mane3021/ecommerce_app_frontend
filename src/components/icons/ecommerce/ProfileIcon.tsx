
import ProfileSvg from '../../../../public/svgIcons/ProfileSvg'
import React from 'react'

interface Props {
  width: string
  height: string
}

const ProfileIcon = ({width, height} : Props) => {
  return (
    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer duration-300'>
        <ProfileSvg
          width={width}
          height={height}
        />
    </div>
  )
}

export default ProfileIcon