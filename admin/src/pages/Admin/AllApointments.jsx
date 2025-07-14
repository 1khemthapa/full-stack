import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments } = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="p-6 w-full max-w-[90%] mx-auto bg-blue-50 h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Appointments</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">SN</th>
              <th className="p-4 text-left">Patient</th>
              <th className="p-4 text-left">Age</th>
              <th className="p-4 text-left">Date & Time</th>
              <th className="p-4 text-left">Doctor</th>
              <th className="p-4 text-left">Fees</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((item, index) => (
              <tr key={item._id} className="border-b hover:bg-gray-100">
                <td className="p-4">{index + 1}</td>
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.userData.image || assets.profileIcon}
                    alt="Patient"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{item.userData.name}</span>
                </td>
                <td className="p-4">{calculateAge(item.userData.dob)}</td>
                <td className="p-4">{slotDateFormat(item.slotDate)}, {item.slotTime}</td>
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.docData.image || assets.profileIcon}
                    alt="Doctor"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span>{item.docData.name}</span>
                </td>
                <td className="p-4">{currency}{item.amount}</td>
                <td className="p-4">
                  
                 {
                  item.cancelled
                  ?<p className='text-red-400 test-xs font-medium'>Cancelled</p>
                  :   <img
                      src={assets.cancel_icon}
                      alt="Cancel"
                      className="w-10"
                    />
                 }
                
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAppointments;
