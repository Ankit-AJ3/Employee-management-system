import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, SetUser] =  useState(null);

const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '12345'){
        SetUser('admin')
        console.log(user);
 
    }else if(email == 'user@me.com' && password == '12345') {
        SetUser('employee')  
        console.log(user);    
    }
        
    else{
         alert("Invalid Credentials")
    }
}


  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage()
  },)
  return (
    <div> 
    {!user ? <Login handleLogin= {handleLogin}/> : " "}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
