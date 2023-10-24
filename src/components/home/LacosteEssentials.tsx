import { lacosteEssentials } from '@/utilities/homePageData/lacosteEssentials'
import Link from 'next/link'
import React from 'react'

const LacosteEssentials = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='px-8 md:px-16 text-2xl font-bold text-darkGray'>Lacoste Essentials</p>
      <ul className='flex flex-row overflow-x-auto px-8 gap-2 md:gap-5 md:px-16 scroll-smooth overflow-hidden scrollbar-hide'>
      {lacosteEssentials.map((Item, index: number) => { 
          return (
            <Link key={index} href={Item.route}>  
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