import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
const Sidebar = () => {

   const {aToken} = useContext(AdminContext)
   
  return (
   <div className="bg-white shadow-md min-h-screen xs:w-[10%] md:w-[auto] lg:w-64 p-4">
  {aToken && (
    <ul className="space-y-4">
      <NavLink
        to="/admin-dashboard"
        className={"flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#7494EC] transition"}
      >
        <img src={assets.home_icon} alt="Home" className="w-5 h-5" />
        <p className="hidden sm:block font-medium ">Dashboard</p>
      </NavLink>

      <NavLink
        to="/all-apointments"
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#7494EC] transition"
      >
        <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
        <p className="hidden sm:block font-medium">Appointments</p>
      </NavLink>

      <NavLink
        to="/add-doctor"
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#7494EC] transition"
      >
        <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
        <p className="hidden sm:block font-medium">Add Doctor</p>
      </NavLink>

      <NavLink
        to="/doctor-list"
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-[#7494EC] transition"
      >
        <img src={assets.people_icon} alt="Doctor's List" className="w-5 h-5" />
        <p className="hidden sm:block font-medium">Doctor's List</p>
      </NavLink>
    </ul>
  )}
</div>

  )
}

export default Sidebar