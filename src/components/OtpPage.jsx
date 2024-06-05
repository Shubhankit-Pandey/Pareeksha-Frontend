import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'


const OtpPage = () => {

    const [otp, setOtp] = useState('')
    const [exam, setExam] = useState(null)
    const navigate = useNavigate()

    const handleOtpSubmit = () => {
        const storedExam = JSON.parse(localStorage.getItem('exams'));
        const examid = storedExam.some(e => e.otp === otp);
        if (storedExam && examid) {
            alert('Valid examination code')
            setExam(storedExam);
            console.log(otp);
            navigate(`/view/${otp}`)

        } else {
            alert('Invalid OTP');
        }
    };

    const handlePdfUpload = (event) => {
        setPdf(event.target.files[0]);
    };


    return (
        <div className='font-serif'>
            <Navbar />
            <div className="my-10 max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold mb-1">Examination Code Verification</h1>
                    <p className="text-[15px] text-slate-500">Enter the 4-digit examination code that was sent to your email.</p>
                </header>
                <form id="otp-form">
                    <div className="flex items-center justify-center gap-3">
                        {/* <input
                            type="text"
                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#00684A] focus:ring-2 focus:ring-[#00684A]"
                            pattern="\d*" maxlength="1" />
                        <input
                            type="text"
                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#00684A] focus:ring-2 focus:ring-[#00684A]"
                            maxlength="1" />
                        <input
                            type="text"
                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#00684A] focus:ring-2 focus:ring-[#00684A]"
                            maxlength="1" />
                        <input
                            type="text"
                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-[#00684A] focus:ring-2 focus:ring-[#00684A]"
                            maxlength="1" /> */}
                        <input
                            className="border p-2 mb-4 w-full"
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                        />
                    </div>
                    <div className="max-w-[260px] mx-auto mt-4">
                        <button onClick={handleOtpSubmit} type="submit"
                            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#00684A] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#00684a] focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150">Verify
                        </button>
                    </div>
                </form>
                <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-[#00684A] hover:text-[#288359ac]" href="#0">Resend</a></div>
            </div>
            <Footer />
        </div>
    )
}

export default OtpPage