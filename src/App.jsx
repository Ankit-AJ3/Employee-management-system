import  { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

const [user, SetUser] =  useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)
// console.log(authData.employees)

// useEffect(() => {
  
//   if(authData){
//     const loggedInUser = localStorage.getItem('loggedInUser')
//     if(loggedInUser){
//       SetUser(loggedInUser.role)
//     }
//   }
  
// }, [authData]);


const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '12345'){
        SetUser( 'admin')
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
 
    }else if(authData){
        const employee =authData.employees.find((e)=> email == e.email & e.password == password)
        if(employee){
          SetUser('employee')  
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
        }
    }        
    else{
         alert("Invalid Credentials")
    }
}

  return (
    <div> 
    {!user ? <Login handleLogin= {handleLogin}/> : " "}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard data={loggedInUserData}  />}
    </div>
  )
}

export default App
