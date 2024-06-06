import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Submissions = () => {
    const { otp } = useParams();
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/submissions/${otp}`);
                if (response.ok) {
                    const data = await response.json();
                    setSubmissions(data.submissions);
                } else {
                    console.error('Failed to fetch submissions');
                }
            } catch (error) {
                console.error('Error fetching submissions:', error);
            }
        };
        fetchSubmissions();
    }, [otp]);

    return (
        <div className="font-serif">
            <Navbar />
            <div className="my-10 max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold mb-1">View Submissions for OTP: {otp}</h1>
                </header>
                <ul className="list-disc text-left">
                    {submissions.length > 0 ? (
                        submissions.map((submission, index) => (
                            <li key={index}>
                                {submission.pdfName}
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
