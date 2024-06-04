import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from '../public/icons/logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import OtpPage from './components/OtpPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OtpPage />
    </>
  )
}

export default App
