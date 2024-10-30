import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, SetUser] =  useState(null);

const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '12345'){
      console.log("this is Admin");
    }else{
      alert("Invalid Credentials")
    }
}

handleLogin('admin@me.com',12345)

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <div> 
    {!user ? <Login/> : " "}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
