import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ExamPage = () => {
    return (
        <div className='text-serif'>
            <Navbar />
            <div className='w-[100vw] py-10 flex flex-col gap-7 items-center'>
                <div className='flex items-center gap-[30vw]'>
                    <div className='text-[20px] text-center'>
                        Create exam form
                    </div>
                    <button className='w-[150px] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        <div>
                            View Submissions
                        </div>
                    </button>
                </div>
                <div className='flex gap-4'>
                    <input type="text" placeholder='Type your Question here' className='border shadow-md w-[48vw]  rounded-[20px] p-2 my-3' />
                    <img src="icons/ImageUpload.svg" alt="" />
                    <img src="icons/Add.svg" alt="" />
                </div>
                <div className=' h-[0.7px] w-[54vw] bg-black'>
                </div>
                <div className='flex gap-3 border shadow-md w-[54vw]  rounded-[20px] p-2 my-3'>
                    <img src="icons/Add.svg" alt="" />
                    <div className='w-[46vw] border border-gray-400'>
                        Question
                    </div>
                    <img src="icons/Delete.svg" alt="" />
                </div>
                <button className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                    Submit
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default ExamPage
