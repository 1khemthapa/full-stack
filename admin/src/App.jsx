// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import Sidebar from './components/Sidebar';
// import DoctorList from './components/DoctorList';
// import AddSpecialityForm from './components/AddSpecialityForm';
// import AddDoctorForm from './components/AddDoctorForm';

// const App = () => (
//   <Router>
//     <div className="flex min-h-screen bg-gray-50">
//       <Sidebar />

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         <Routes>
//           <Route path="/"                element={<Navigate to="/doctorlist" replace />} />
//           <Route path="/doctorlist"      element={<DoctorList />} />
//           <Route path="/add-speciality"  element={<AddSpecialityForm />} />
//           <Route path="/add-doctor"      element={<AddDoctorForm />} />
//           {/* fallback */}
//           <Route path="*" element={<p>404 – Page not found</p>} />
//         </Routes>
//       </main>
//     </div>
//   </Router>
// );

// export default App;

import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './context/AdminContext';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import DoctorList from './pages/Admin/DoctorList';
import AddDoctor from './pages/Admin/AddDoctor';
import AllApointments from './pages/Admin/AllApointments'




const App = () => {
  const { aToken } = useContext(AdminContext)

  return aToken ? (
    <>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"/>
        <Navbar/>
        <div className='flex items-start'>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<></>} />
            <Route path='/admin-dashboard' element={<Dashboard/>} />
            <Route path='/all-apointments' element={<AllApointments/>} />
            <Route path='/add-doctor' element={<AddDoctor/>} />
            <Route path='/doctor-list' element={<DoctorList/>} />
          </Routes>
        </div>
    </>
  ):(
   <>
     <Login/>
    <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"/>
   </>
  )
}

export default App
