import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const View = () => {
    const { slug } = useParams();
    const [questions, setQuestions] = useState([]);
    const [submissionName, setSubmissionName] = useState('');

    useEffect(() => {
        const getQuestions = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/exams/${slug}`);
                const data = await response.json();
                if (data.success) {
                    setQuestions(data.questions);
                } else {
                    console.error('Failed to fetch questions:', data.message);
                }
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        };

        getQuestions();
    }, [slug]);

    const handleSubmissionNameChange = (event) => {
        setSubmissionName(event.target.value);
    };

    const handleSubmit = async () => {
        if (submissionName) {
            try {
                const response = await fetch('http://localhost:3000/api/submissions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ pdfName: submissionName, otp: slug }),
                });
                const data = await response.json();
                if (data.success) {
                    alert('Submission uploaded');
                } else {
                    console.error('Failed to upload submission:', data.message);
                }
            } catch (error) {
                console.error('Error uploading submission:', error);
                alert('Failed to upload submission. Please try again.');
            }
        } else {
            alert('Please enter a submission name');
        }
    };

    return (
        <>
            <Navbar />
            {questions.map((question, index) => (
                <div key={index} className='flex gap-3 border shadow-md w-[54vw] rounded-[20px] p-2 my-2'>
                    <img src="icons/Add.svg" alt="" />
                    <div className='w-[46vw] border border-gray-400'>
                        {question}
                    </div>
                    <img src="icons/Delete.svg" alt="" />
                </div>
            ))}
            <div className="mt-6">
                <input
                    type="text"
                    value={submissionName}
                    onChange={handleSubmissionNameChange}
                    placeholder="Enter submission name"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#00684A] file:text-white hover:file:bg-[#005a3a] cursor-pointer"
                />
                <button
                    onClick={handleSubmit}
                    className="mt-4 w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#00684A] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#005a3a] focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                    Submit
                </button>
            </div>
            <Footer />
        </>
    );
};

export default View;
