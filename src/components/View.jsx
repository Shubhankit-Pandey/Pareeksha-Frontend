import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const View = () => {

    const { slug } = useParams();
    const exams = JSON.parse(localStorage.getItem('exams')) || [];
    const exam = exams.find(exam => exam.otp === slug);
    const questions = exam ? exam.questions : [];
    const [pdf, setPdf] = useState(null);   

    const handlePdfUpload = (event) => {
        setPdf(event.target.files[0]);
    };

    const handleSubmit = () => {
        if (pdf) {
            const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
            submissions.push({ otp: slug, pdfName: pdf.name });
            localStorage.setItem('submissions', JSON.stringify(submissions));
            alert('Submission uploaded');
        } else {
            alert('Please upload a PDF');
        }
    };
    



    return (
        <>
            <Navbar/>
            {questions.map((e) => {
                return <div className='flex gap-3 border shadow-md w-[54vw]  rounded-[20px] p-2 my-2'>
                    <img src="icons/Add.svg" alt="" />
                    <div className='w-[46vw] border border-gray-400'>
                        {e}
                    </div>
                    <img src="icons/Delete.svg" alt="" />
                </div>
            })}
            <div className="mt-6">
                    <input 
                        type="file" 
                        accept="application/pdf" 
                        onChange={handlePdfUpload}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00684A] file:text-white hover:file:bg-[#005a3a] cursor-pointer"
                    />
                    <button 
                        onClick={handleSubmit} 
                        className="mt-4 w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#00684A] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#005a3a] focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                    >
                        Upload PDF
                    </button>
                </div>
            <Footer/>
        </>
    )
}

export default View
