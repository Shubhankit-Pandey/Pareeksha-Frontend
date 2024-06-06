import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignup = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('currentUser', JSON.stringify({ email, password }));
                navigate('/landing');
            } else {
                alert(data.message || 'An error occurred during signup.');
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An error occurred while signing up. Please try again.');
        }
    };

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
                        Enter email:
                    </div>
                    {/* email */}
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder='Enter your email' className='border shadow-md w-[30vw]  rounded-[20px] p-2 my-3' />
                </div>
                <div>
                    <div>
                        Enter password:
                    </div>
                    {/* password */}
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' className='border shadow-md w-[30vw]  rounded-[20px] p-2 my-3' />
                </div>
                <div className='text-center'>
                    <button onClick={handleSignup} className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        Get Started
                    </button>
                    <div className='my-2'>
                        Already a member ? <a className='text-[#00684A]' href="/login">Login Now</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp
