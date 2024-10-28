import React from 'react'

const Login = () => {
  return (
      <div className='flex h-screen  w-screen items-center justify-center'>
        <div className='border-2 border-red-600 p-20'>
          <form className='flex flex-col items-center justify-center'>
              <input className='text-black outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl rounded-full placeholder:text-white' type='email' placeholder='Enter your email'/>
              <input className='text-black outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl rounded-full mt-3 placeholder:text-white' type='password' placeholder='Enter your password'/>
              <button className='text-white border-none outline-none  border-2 bg-emerald-600 py-3 text-xl rounded-full mt-3 placeholder:text-white'>Log In</button>
          </form>
        </div>
      </div>
  )
}

export default Login
