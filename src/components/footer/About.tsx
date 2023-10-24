import React from 'react'
import InstagramIcon from '../icons/InstagramIcon'
import FacebookIcon from '../icons/FacebookIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import PinterestIcon from '../icons/PinterestIcon'
import TumblrIcon from '../icons/TumblrIcon'
import YoutubeIcon from '../icons/YoutubeIcon'
import Link from 'next/link'
import LinkedInIcon from '../icons/LinkedInIcon'

const About = () => {
  return (
    <div className='bg-lightGray mt-6 py-16 px-4 md:px-8 lg:px-16 text-darkGray'>
      {/* Top */}
      <div className='flex flex-col md:flex-row'>
        {/* sign up */}
        <div className='flex flex-col gap-5'>
          <h1>Want exclusive offers & first access to <br /> products? Sign up.</h1>
            <div className='flex gap-5'>
              <input
              className='px-6 py-2 rounded-full'
              type="email" placeholder='Your Email Address' />
              <button className='bg-white border border-gray-200 text-darkGray px-6 py-2 rounded-full hover:text-white hover:bg-darkGray hover:cursor-pointer duration-300'>
                Sign Up
              </button>
            </div>

            <div className='flex items-center justify-center gap-8 pt-2'>
              <Link className='cursor-pointer' target='_blank' href='https://instagram.com/vinod_m7780?igshid=OGQ5ZDc2ODk2ZA=='><InstagramIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.facebook.com/profile.php?id=100017852972119'><FacebookIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://twitter.com/VinodMane21'><TwitterIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.linkedin.com/in/vinod-mane-a74817220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LinkedInIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.youtube.com/'><YoutubeIcon/></Link>
              <Link className='cursor-pointer' target='_blank' href='https://www.tumblr.com/'><TumblrIcon/></Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About