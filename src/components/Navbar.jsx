import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-center md:justify-between px-10 h-[10vh] items-center bg-[#001E2B] text-white'>
            <img src="/icons/logo_white.svg" className='w-36 hidden md:flex' alt="" />
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li></ul>
        </div>
    )
}

export default Navbar
