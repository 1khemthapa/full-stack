import React,{useContext} from 'react'
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  // const appointmentToken = 1;
  const {doctors}=useContext(AppContext)
  return (
<div className='min-h-screen '>
  
  <p className='pb-3 mt-12 font-medium text-2xl text-zinc-800 border-b border-zinc-300'>My Appointments</p>

<div className='bg-gray-50 rounded-md mt-6 shadow-sm'>
  {doctors.slice(0, 3).map((item, index) => (
    <div
      className='md:flex grid grid-cols-[1fr_2fr] md:grid-cols-none gap-4 p-4 border-b hover:bg-white transition-all duration-300'
      key={index}
    >
      
      <div className='flex-shrink-0'>
        <img
          className='w-28 h-28 object-cover rounded-md border bg-indigo-50 shadow-sm'
          src={item.image}
          alt={item.name}
        />
      </div>

      
      <div className='flex-1 text-sm text-zinc-700'>
        <p className='text-lg font-semibold text-neutral-800'>{item.name}</p>
        <p className='text-sm mb-1'>{item.speciality}</p>

        <p className='text-sm font-medium mt-2 text-zinc-800'>Address:</p>
        <p className='text-xs text-zinc-600'>{item.address.line1}</p>
        <p className='text-xs text-zinc-600'>{item.address.line2}</p>

        <p className='text-xs mt-3 text-zinc-700'>
          <span className='font-medium text-sm'>Date & Time:</span> 03, July 2025 | 11:24 PM
        </p>
      </div>

      
      <div className='flex flex-col gap-2 justify-end mt-4 md:mt-0'>
        <button className='text-sm rounded-md py-2 px-4 border border-primary text-primary hover:bg-primary hover:text-white transition duration-300'>
          Pay Online
        </button>
        <button className='text-sm rounded-md py-2 px-4 border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition duration-300'>
          Cancel Appointment
        </button>
      </div>
    </div>))
  }
  </div>
  </div>
)
  }



export default MyAppointments