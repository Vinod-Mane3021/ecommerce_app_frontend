import React from 'react'
import EmailInputText from '../../../components/SearchFeilds/EmailInputText'
import PasswordInputText from '../../../components/SearchFeilds/PasswordInputText'
import SignInBtn from '@/components/buttons/SignInBtn'
import Link from 'next/link'

const LoginForm = () => {
  return (
    <form>LoginForm</form>

    // <main className="flex flex-col justify-center items-center lg:flex-row w-full h-screen relative ">
    //     {/* Welcome page */}
    //     <form className='absolute flex flex-col justify-center items-center py-20 gap-7 w-[35%] rounded-lg backdrop-blur-md'>
    //         <span className='flex flex-col items-center' >
    //             <h1 className='uppercase text-4xl'>welcome back</h1>
    //             <p className='text-sm text-gray-500'>Please enter your details</p>
    //         </span>
    //         <EmailInputText/>
    //         <PasswordInputText/>
    //         <div className='flex flex-col w-[75%] gap-2' >
    //             <div className='w-full flex flex-row justify-between items-center'>
    //                 <span className='flex gap-2'>
    //                     <input type="checkbox" />
    //                     <p className='text-sm'>Remember me</p>
    //                 </span>
    //                 <Link href='/' className='text-sm hover:underline hover:text-blue-300'>Forgot password</Link>
    //             </div>
    //             <SignInBtn/>
    //         </div>
    //         <p className='text-xs'>Don’t have an account? <Link className='hover:text-blue-300 hover:underline' href='/authentication/SignUp'>Sign up fo free!</Link></p>
    //     </form>
    //     <img className='h-full w-full' src="/images/cartBackgroundImage.png" alt="login page welcome back image" />
    // </main>
  )
}

export default LoginForm





