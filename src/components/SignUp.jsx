import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <div className="container flex flex-col w-full h-[105vh] items-center py-10 gap-10 font-sans">
                <div className='text-center'>
                    <div className='text-[3.125rem] font-serif text-[#]'>
                        Get Started
                    </div>
                    <div>
                        Join us today for hassle free examination
                    </div>
                </div>
                <div>
                    <div>
                        Enter username:
                    </div>
                    <input type="text" placeholder='Enter your username' className='border shadow-md w-[30vw]  rounded-[20px] p-2 my-3' />
                </div>
                <div>
                    <div>
                        Enter password:
                    </div>
                    <input type="text" placeholder='Enter your password' className='border shadow-md w-[30vw]  rounded-[20px] p-2 my-3' />
                </div>
                <div className='text-center'>
                    <button className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        Get Started
                    </button>
                    <div className='my-2'>
                        Already a member ? <a className='text-[#00684A]' href="/">Login Now</a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SignUp
