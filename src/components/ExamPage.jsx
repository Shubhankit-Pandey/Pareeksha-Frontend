import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import { json } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ExamPage = () => {

    const [questions, setQuestions] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState("")
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        if (currentQuestion.trim()) {
            setQuestions([...questions, currentQuestion]);
            setCurrentQuestion('')
        }
    }

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/exams', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ otp, questions }),
            });

            const data = await response.json();

            if (data.success) {
                alert(`Exam created with OTP: ${otp}`);
            } else {
                alert('Error creating exam');
            }
        } catch (error) {
            console.error('Error submitting exam:', error);
            alert('An error occurred while submitting the exam. Please try again.');
        }
    };

    return (
        <div className='text-serif'>
            <Navbar />
            <div className='w-[100vw] overflow-scroll py-10 flex flex-col gap-7 items-center'>
                <div className='flex items-center gap-[30vw]'>
                    <div className='text-[20px] text-center'>
                        Create exam form
                    </div>
                    <button onClick={() => { 
                        const newOtp = prompt('Enter the exam id')
                        navigate(`/submissions/${newOtp}`) 
                        }} className='w-[150px] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        <div>
                            View Submissions
                        </div>
                    </button>
                </div>
                <div className='flex gap-4'>
                    <input type="text" value={currentQuestion} onChange={e => setCurrentQuestion(e.target.value)} placeholder='Type your Question here' className='border shadow-md w-[48vw]  rounded-[20px] p-2 my-3' />
                    <img src="icons/ImageUpload.svg" alt="" />
                    <img onClick={handleAddQuestion} src="icons/Add.svg" className='cursor-pointer' alt="" />
                </div>
                <div className=' h-[0.7px] w-[54vw] bg-black'>
                </div>
                {questions.map((e) => {
                    return <div className='flex gap-3 border shadow-md w-[54vw]  rounded-[20px] p-2 my-2'>
                        <img src="icons/Add.svg" alt="" />
                        <div className='w-[46vw] border border-gray-400'>
                            {e}
                        </div>
                        <img src="icons/Delete.svg" alt="" />
                    </div>
                })}
                <button onClick={handleSubmit} className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                    Submit
                </button>
            </div>
            <Footer />
        </div>
    )
}

export default ExamPage
