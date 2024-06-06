import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                navigate('/landing');
            } else {
                alert('Invalid email or password');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container flex flex-col w-full h-[105vh] items-center py-10 gap-10 font-sans">
                <div className='text-center'>
                    <div className='text-[3.125rem] font-serif text-[#]'>
                        Login
                    </div>
                    <div>
                        Login to start your journey today.
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
                    <button onClick={handleLogin} className='w-[30vw] border border-[#00684A] bg-[#00684A] text-white rounded-[20px] p-2'>
                        Login
                    </button>
                    <div className='my-2'>
                        New Member ? <a className='text-[#00684A]' href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login
