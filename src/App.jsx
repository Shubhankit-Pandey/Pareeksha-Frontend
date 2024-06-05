import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import SignUp from './components/SignUp'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import OtpPage from './components/OtpPage'
import ExamPage from './components/ExamPage'
import View from './components/View'
import Submissions from './components/Submissions'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: 'signup',
      element: <SignUp />
    },
    {
      path: 'landing',
      element: <LandingPage />
    },
    {
      path: 'conduct',
      element: <ExamPage />
    },
    {
      path: 'otppage',
      element: <OtpPage />
    },
    {
      path: 'view/:slug',
      element : <View/>
    },
    {
      path: 'submissions/:otp',
      element : <Submissions/>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
