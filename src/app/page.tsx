
import React from 'react'
import LoginForm from './authentication/LogIn/page'
import Header from '@/components/header/Header'
import NavBar from '@/components/navBar/NavBar'
import NavBarMobile from '@/components/navBarMobile/NavBarMobile'
import HomePage from './home/page'

const page = () => {
  return (
    <main className='font-fontPoppins bg-white mb-32'>
      <div className="fixed top-0 w-full z-20 bg-white">
          <Header />
          <div className='fixed w-full z-20 bg-white hidden lg:block'>
            <NavBar />
          </div>
        </div>
        <div className='mt-28'>
          <HomePage/>
        </div>
      {/* <NavBarMobile/> */}
    </main>
  )
}

export default page


