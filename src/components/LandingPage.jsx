import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <div className='font-serif'>
            <Navbar />
            <div className='h-[80vh] flex flex-col gap-10 justify-center items-center'>
                <div>
                    <div className='text-[25px] text-center'>
                        Become the examiner
                    </div>
                    <button className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        <div className='flex justify-center items-center gap-3'>
                            <img src="icons/Conduct.svg" alt="" />
                            <div>
                                Conduct
                            </div>
                        </div>
                    </button>
                </div>
                <div>
                    <div className='text-[25px] text-center'>
                        Become the examinee
                    </div>
                    <button className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        <div className='flex justify-center items-center gap-3'>
                            <img src="icons/Attend.svg" alt="" />
                            <div>
                                Attend
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage
