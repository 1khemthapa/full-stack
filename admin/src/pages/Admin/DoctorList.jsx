import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'

const DoctorList = () => {

  const { doctors, aToken, getAllDoctor, changeAvailability } = useContext(AdminContext)

  useEffect(()=>{
      if(aToken){
        getAllDoctor()
      }
  },[aToken])
  return (
<div className="bg-blue-50 w-full min-h-screen px-8 py-6">
  <h1 className="text-3xl font-bold text-blue-900 mb-6">All Doctors</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {doctors.map((item, i) => (
      <div 
        key={i}
        className="bg-white rounded-3xl shadow-md overflow-hidden group transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative bg-gradient-to-r from-blue-300 to-blue-400 h-40 flex items-center justify-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold text-blue-900">{item.name}</h2>
          <p className="text-blue-600">{item.speciality}</p>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={item.available}
                className="accent-blue-600 w-5 h-5"
                onChange={()=>changeAvailability(item._id)}
              />
              <p className={`font-medium ${item.available ? 'text-green-600' : 'text-red-500'}`}>
                Available 
              </p>
            </div>

            {/* <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm shadow hover:bg-blue-700 transition">
              View Profile
            </button> */}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}

export default DoctorList