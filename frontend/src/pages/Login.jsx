
import {assets} from '../assets/assets';
import { useState } from 'react';
const Login = () => {
  const [login,setLogin]=useState(true)
  const toggleForm=()=>{
    setLogin(!login)
  }
  return (
  
    <div>
      {/*login form */}
      {login ?(
    <form>
    <div className=' h-screen flex flex-col  items-center bg-gradient-to-r from-blue-800 to-blue-300'>
      <p className='font-bold text-3xl  text-white text-center sm:mt-32 mt-[120px]'>Login to your account</p>

      {/*image and container for login page */}
      <div className='flex  md:w-[55rem] md:h-[26rem] sm:w-[15rem] sm:h-[25rem]  sm:mt-[5px]  justify-center mt-2 h-[25rem] '>

      
      <img src={assets.loginimg} className='md:h-[25rem] hidden sm:block rounded-l-xl 'alt="img" />


      {/*container for login-page */}
      <div className='bg-white border-2 border-l-0 p-3 sm:p-0  sm:w-[25rem] sm:h-[25rem] flex sm:rounded-none sm:rounded-r-xl rounded-xl'>
      <div className='flex flex-col mt-4 '>
          <label htmlFor="username" className='text-lg mb-2'>Username</label>
            <input className='text-lg mb-2 h-10 border-2 rounded p-1' type="text"placeholder="username" />
          <label htmlFor="email" className='text-lg mb-2'>Email</label>
            <input className='text-lg mb-2 h-10 border-2 rounded p-1' type="email"placeholder="email" />
          <label htmlFor="password" className='mb-2 text-lg'>Password</label>
            <input type="password" placeholder='password' className='text-lg mb-2 h-10 border-2 rounded p-1' />
        <button className='bg-blue-500 text-white text-lg mt-2 mb-2 h-10 rounded cursor-pointer hover:bg-blue-300 hover'>Login</button>
        <p className='mt-2'>Not Registered yet? <a onClick={toggleForm} className='cursor-pointer hover:text-blue-300 text-blue-500'>Sign up</a></p>
        
     </div>
     
    </div>

     
    </div>

      </div>
      </form>)
      :
      (
<form>
    <div className=' h-screen flex flex-col  items-center bg-gradient-to-r from-blue-800 to-blue-300'>
      <p className='font-bold text-3xl  text-white text-center sm:mt-32 mt-[120px]'>Signin to your new account</p>

      {/*image and container for signin page */}
      <div className='flex  md:w-[55rem] md:h-[26rem] sm:w-[15rem] sm:h-[25rem]  sm:mt-[5px]  justify-center mt-2 h-[25rem] transition-3s '>

        <img src={assets.signupimg} className='md:h-[25rem] hidden sm:block rounded-l-xl'alt="img" />

      {/*container for login-page */}
      <div className='bg-white border-2 border-l-0 p-3 sm:p-0  sm:w-[25rem] sm:h-[25rem] flex rounded-xl sm:rounded-none sm:rounded-r-xl '>
      <div className='flex flex-col mt-4 '>
          <label htmlFor="username" className='text-lg mb-2'>Username</label>
            <input className='text-lg mb-2 h-10 border-2 rounded p-1' type="text"placeholder="username" />
          <label htmlFor="email" className='text-lg mb-2'>Email</label>
            <input className='text-lg mb-2 h-10 border-2 rounded p-1' type="email"placeholder="email" />
          <label htmlFor="password" className='mb-2 text-lg'>Password</label>
            <input type="password" placeholder='password' className='text-lg mb-2 h-10 border-2 rounded p-1' />
        <button className='bg-blue-500 text-white text-lg mt-2 mb-2 h-10 rounded cursor-pointer hover:bg-blue-300'>Sign up</button>
        <p className='mt-2'>Already Registered? <span onClick={toggleForm} className='cursor-pointer hover:text-blue-300 text-blue-500'>Login</span></p>
        
     </div>
     
    </div>
    </div>

      </div>
      </form>
    
      )}
      </div>
      )
}
export default Login;
