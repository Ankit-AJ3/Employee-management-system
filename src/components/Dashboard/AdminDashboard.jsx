import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>     
        <div> 
          <from>
              <div>
                  <h3>Task Title</h3>
                  <input type="text" placeholder='Make a UI Design'/>
              </div>
             <div>
                    <h3>Description</h3>
                    <textarea name=" " id='' cols="" rows=""> </textarea>
             </div>
             <div>
                    <h3>Date</h3>
                    <input type='date'/>
             </div>
             <div>
             <h3>Assign to </h3>
             <input type="text" placeholder='employee name'/>
             </div>
              <div>
              <h3>Category</h3>
              <input type="text" placeholder='design, dev, etc' />
              </div>
              <button>Create task</button>
          </from>
        </div> 
    </div>
  )
}

export default AdminDashboard
