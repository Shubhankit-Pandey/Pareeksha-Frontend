import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleSignup = () => {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = storedUsers.some(user => user.email === email);

        if (userExists) {
            alert('User already exists');
        } else {
            storedUsers.push({ email, password });
            localStorage.setItem('users', JSON.stringify(storedUsers));
            localStorage.setItem('currentUser', JSON.stringify({ email, password }));
            navigate('/landing');
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
