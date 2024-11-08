import React from 'react'
import Header from '../others/Header.jsx'
import TaskListNumbers from '../others/TaskListNumbers.jsx'
import TaskList from '../TaskList/TaskList.jsx'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard