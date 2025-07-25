import React, { useContext, useEffect, useState } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorList = () => {
  const { doctors, aToken, getAllDoctor, changeAvailability } = useContext(AdminContext);
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    if (aToken) {
      getAllDoctor();
    }
  }, [aToken]);

  const filteredDoctors = doctors.filter((item) => {
    if (filterType === 'available') return item.available;
    if (filterType === 'unavailable') return !item.available;
    return true;
  });

  return (
    <div className="bg-blue-50 w-full min-h-screen px-6 py-4">
      <h1 className="text-2xl font-bold text-blue-900 mb-4">Doctor List</h1>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-4">
        {['all', 'available', 'unavailable'].map((type) => (
          <button
            key={type}
            onClick={() => setFilterType(type)}
            className={`px-4 py-2 rounded-md font-medium ${
              filterType === type
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-blue-600 text-blue-600'
            }`}
          >
            {type === 'all' && 'All Doctors'}
            {type === 'available' && 'Available Doctors'}
            {type === 'unavailable' && 'Unavailable Doctors'}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="w-full min-w-[700px] text-sm text-gray-700 table-auto">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4 text-left">SN</th>
              <th className="p-4 text-left">Doctor</th>
              <th className="p-4 text-left">Speciality</th>
              <th className="p-4 text-left">Fee</th>
              <th className="p-4 text-left">Availability</th>
              <th className="p-4 text-left">Change Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((item, index) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="p-4">{index + 1}</td>
                  <td className="p-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="p-4 ">{item.speciality}</td>
                  <td className="p-4 ">{item.fees}</td>
                  <td className="p-4">
                    <span
                      className={`font-semibold ${
                        item.available ? 'text-green-600' : 'text-red-500'
                      }`}
                    >
                      {item.available ? 'Available' : 'Unavailable'}
                    </span>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => changeAvailability(item._id)}
                      className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition"
                    >
                      {item.available ? 'Set Unavailable' : 'Set Available'}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-500">
                  No doctors found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorList;