import React from 'react'
import InstagramIcon from '@/components/icons/social/InstagramIcon'
import FacebookIcon from '@/components/icons/social/FacebookIcon'
import { TwitterIcon } from '@/components/icons/social/TwitterIcon'
import Link from 'next/link'
import YoutubeIcon from '@/components/icons/social/YoutubeIcon'
import VisaIcon from '@/components/icons/payments/VisaIcon'
import AmexIcon from '@/components/icons/payments/AmexIcon'
import MasterCardIcon from '@/components/icons/payments/MasterCardIcon'
import DiscoverIcon from '@/components/icons/payments/DiscoverIcon'
import ApplePayIcon from '@/components/icons/payments/ApplePayIcon'
import UpsShippingIcon from '@/components/icons/payments/UpsShippingIcon'
import FacilitiIcon from '@/components/icons/payments/FacilitiIcon'
import TumblrIcon from '@/components/icons/social/TumblrIcon'
import LinkedInIcon from '@/components/icons/social/LinkedInIcon'


const About = () => {
  return (
    <div className='bg-lightGray mt-6 pt-16  text-darkGray'>
      {/* Top  */}
      <div className='px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between gap-5'>
        
        {/* sign up */}
        <div className='flex flex-col gap-5 items-center justify-center md:items-baseline md:justify-normal  '>
            <h1 className='text-sm md:text-base mx-auto'>Want exclusive offers & first access to products? Sign up.</h1>
            <div className='flex gap-2 md:gap-5 w-full items-center justify-center md:justify-between text-xs md:text-sm'> 
              <input
                className='px-12 sm:px-28 md:px-8 py-3 rounded-full'
                type="email" placeholder='Your Email Address' />
              <button className='px-4 py-3 w-24 bg-white border items-center justify-center border-gray-200 text-darkGray rounded-full hover:text-white hover:bg-darkGray hover:cursor-pointer duration-300'>
                Sign Up
              </button>
            </div>

            <div className='flex items-center w-full justify-center gap-5 sm:gap-6 md:gap-7 lg:gap-8 pt-2'>
              <Link className='cursor-pointer' target='_blank' href='https://instagram.com/vinod_m7780?igshid=OGQ5ZDc2ODk2ZA=='><InstagramIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.facebook.com/profile.php?id=100017852972119'><FacebookIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://twitter.com/VinodMane21'><TwitterIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.linkedin.com/in/vinod-mane-a74817220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LinkedInIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.youtube.com/'><YoutubeIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.tumblr.com/'><TumblrIcon/></Link>
            </div>
            <p className='text-xs text-slate-500 font-semibold'>83 STORES IN UNITED STATES</p>
            <button className='py-3 w-full sm:w-[80%] md:full bg-white border border-gray-200 text-darkGray text-xs md:text-sm rounded-full hover:text-white hover:bg-darkGray hover:cursor-pointer duration-300'>
                Find a boutique
            </button>
        </div>

        <div className='min-w-screen-screen border-t border-gray-300 md:hidden my-5'/>


        <div className='flex flex-row w-full justify-evenly gap-6'>

        {/* ABOUT LACOSTE */}
        <div className='text-xs flex flex-col gap-2 w-fit '>
            <h1 className='text-slate-500 font-semibold pb-2'>ABOUT LACOSTE</h1>
            <p className='hover:underline hover:cursor-pointer'>Le Club Lacoste</p>
            <p className='hover:underline hover:cursor-pointer'>The Lacoste Group</p>
            <p className='hover:underline hover:cursor-pointer'>Careers</p>
            <p className='hover:underline hover:cursor-pointer'>Military Discount</p>
            <p className='hover:underline hover:cursor-pointer'>Digital Accessibility</p>
            <p className='hover:underline hover:cursor-pointer'>Brand protection</p>
            <p className='hover:underline hover:cursor-pointer'>FAQ</p>
        </div>
        {/* CATEGORIES */}
        <div className='text-xs flex flex-col gap-2 w-fit '>
            <h1 className='text-slate-500 font-semibold pb-2'>CATEGORIES</h1>
            <p className='hover:underline hover:cursor-pointer'>Men's Collection</p>
            <p className='hover:underline hover:cursor-pointer'>Women's Collection</p>
            <p className='hover:underline hover:cursor-pointer'>Kid's Collection</p>
            <p className='hover:underline hover:cursor-pointer'>Polo Shop</p>
            <p className='hover:underline hover:cursor-pointer'>Shoe Shop</p>
            <p className='hover:underline hover:cursor-pointer'>Lacoste Sport</p>
        </div>
        {/* HELP & CONTACTS */}
        <div className='text-xs flex-col gap-3 w-60 hidden lg:flex'>
            <h1 className='text-slate-500 font-semibold pb-2'>HELP & CONTACTS</h1>
            <p className='hover:underline hover:cursor-pointer'>By phone</p>
            <p className='hover:underline hover:cursor-pointer'>2-222-222-2222</p>
            <p>Contact us Monday through Friday from 9 am to 11 pm EST, and Saturday and Sunday from 10 am to 9 pm EST.</p>
            <p className='hover:underline hover:cursor-pointer'>By email and by chat</p>
            <p className='hover:underline hover:cursor-pointer'>FAQ</p>
        </div>

        </div>


      </div>

      {/* divider */}
      <div className='px-4 md:px-8 lg:px-16 w-full border-t border-gray-300 my-14'/>

      {/* Bottom */}
      <div className='px-4 md:px-8 lg:px-16 w-full pb-10 flex flex-col lg:flex-row lg:justify-between justify-center items-center lg:items-baseline gap-5 lg:gap-0'>
      
        {/* PAYMENT METHODS */}
        <div className='lg:gap-3 text-xs flex flex-col items-center  w-80'>
          <p className='text-slate-500 font-semibold'>PAYMENT METHODS</p>
          <div className='flex gap-3'>
            <VisaIcon/>
            <AmexIcon/>
            <MasterCardIcon/>
            <DiscoverIcon/>
            <ApplePayIcon/>
          </div>
        </div>

        {/* SHIPPING METHODS */}
        <div className='lg:gap-3 text-xs flex flex-col items-center  w-80'>
          <p className='text-slate-500 font-semibold pb-2'>SHIPPING METHODS</p>
          <UpsShippingIcon/>
        </div>

        {/* ACCESSIBILITY OPTIONS */}
        <div className='lg:gap-3 text-xs flex flex-col items-center  w-80'>
          <p className='text-slate-500 font-semibold pb-2'>ACCESSIBILITY OPTIONS</p>
          <FacilitiIcon/>
        </div>


      </div>
      
      {/* Bottom bottom */}
      <div style={{fontSize: 12}} className='px-4 py-5 md:px-8 lg:px-16 block sm:flex text-xs justify-between items-center bg-white'>
        <div className='flex gap-3'>
          <p className='hover:underline hover:cursor-pointer'>Sitemap</p>
          <p>|</p>
          <p className='hover:underline hover:cursor-pointer'>Terms & Conditions</p>
          <p>|</p>
          <p className='hover:underline hover:cursor-pointer'>Privacy policy</p>
          <p>|</p>
          <p className='hover:underline hover:cursor-pointer'>Size guide</p>
        </div>

        <div className='flex gap-2'>
          <img className='h-4' src="/images/IndiaLogo.png" alt="" />
          <p className='underline hover:no-underline hover:cursor-pointer'>India</p>
        </div>
      </div>

      

    </div>



  )
}

export default About