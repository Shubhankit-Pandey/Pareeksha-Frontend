import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Submissions = () => {
    const { otp } = useParams();
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];

    const handlePdfClick = (url) => {
        window.open(url, '_blank');
    };

    const filteredSubmissions = submissions.filter(submission => submission.otp === otp);

    return (
        <div className="font-serif">
            <Navbar />
            <div className="my-10 max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold mb-1">View Submissions for OTP: {otp}</h1>
                </header>
                <ul className="list-disc text-left">
                    {filteredSubmissions.length > 0 ? (
                        filteredSubmissions.map((submission, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handlePdfClick(submission.pdfName)}
                                    className="text-blue-500"
                                >
                                    {submission.pdfName}
                                </button>
                            </li>
                        ))
                    ) : (
                        <li>No submissions found for OTP: {otp}</li>
                    )}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default Submissions;
