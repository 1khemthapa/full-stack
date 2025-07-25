import React  from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router'
import { AppContext } from '../context/AppContext'
import { useState, useContext } from 'react'

const Banner = () => {
  const navigate=useNavigate()
  const {token, setToken} = useContext(AppContext)
  return (
  
        <div>
        <div className="bg-[#7494EC] items-center text-center   p-6 md:p-8 my-10 max-w-6xl mx-auto flex flex-col gap-6 relative h-60 w-[61rem] rounded-2xl">
          
      <div className="w-full md:w-[40rem] flex flex-col items-center absolute top-0  h-full justify-center">
        <h2 className="text-2xl  md:text-3xl font-bold text-white mb-2">
          Your Health Deserves Trusted Experts
        </h2>
        <p className="text-white text-base md:text-lg mb-4">
          Join thousands of patients who rely on DocTime for easy booking, verified doctors, and personal health tracking. It’s fast, secure, and free to get started.
        </p>
        { token ?
        <button onClick={()=>navigate('/doctors')} className="bg-white hover:text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition">
            Get Appointment
          </button>:

         <button onClick={()=>navigate('/Login')} className="bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
            Create Your Free Account
          </button>
        }
          
        
      </div>

    </div>
      
    </div>
  )
}

export default Banner