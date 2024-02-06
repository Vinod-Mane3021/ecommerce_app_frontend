import { lacosteEssentials } from '@/utilities/data/homePageData/lacosteEssentials'
import Link from 'next/link'
import React from 'react'

const LacosteEssentials = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='px-4 md:px-8 lg:px-16 text-2xl font-bold text-darkGray'>Lacoste Essentials</p>
      <ul className='flex flex-row overflow-x-auto px-4 md:px-16 gap-4 sm:gap-4 md:gap-16  scroll-smooth overflow-hidden scrollbar-hide'>
      {lacosteEssentials.map((Item, index: number) => { 
          return (
            <Link key={index} href={`essentials/${Item.route}`}>    
              <li className='flex flex-col gap-4 hover:cursor-pointer hover:underline' key={index}>
                <img className='min-h-[380] min-w-[250px] md:min-h-[460px] md:min-w-[330px]' src={Item.image} alt="image" />
                <p>{Item.name}</p>
              </li>
            </Link>
          )
        })
      }
      </ul>
    </div>
  )
}

export default LacosteEssentials