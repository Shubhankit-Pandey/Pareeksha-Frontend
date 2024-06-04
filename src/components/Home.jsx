import React from 'react'
import {useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className='m-5 hidden md:flex'>
                <img src="icons/logo.svg" className='w-32' alt="" />
            </div>
            <div className="content flex flex-col md:flex-row items-center  h-[calc(100%-100px) relative z-10 w-[100vw] md:justify-between px-[200px] py-5">
                <div className='flex flex-col text-center gap-5 '>
                    <div className='font-serif text-[3.1rem]'>
                        Pareeksha
                    </div>
                    <div className=' h-[0.7px] bg-black'>
                    </div>
                    <div className='font-sans text-[1.25rem]'>
                    Attend and Take exams whenever wherever 
                    </div>
                    <button onClick={()=>navigate('/signup')} className='border border-[#00684A] bg-[#00684A] hover:bg-[#2c7762] text-white rounded-[20px] p-2'>
                        Get Started
                    </button>
                    <button onClick={()=>navigate('/login')} className='border border-[#00684A] bg-[#00684A] hover:bg-[#2c7762] text-white rounded-[20px] p-2'>
                        Login
                    </button>
                </div>
                <div>
                    <img src="icons/Landing.svg" className='w-[350px]' alt="" />
                </div>
            </div>
            <div className="overlay fixed bottom-0 w-full text-center">
                <img src="icons/Landing_vector.svg" alt="" />
            </div>
        </div>
    )
}

export default Home
