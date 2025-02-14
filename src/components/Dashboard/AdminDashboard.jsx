import React, { useContext } from 'react'
import Header from '../others/Header.jsx'
import CreateTask from '../others/CreateTask.jsx'
import AllTask from '../others/AllTask.jsx'
import EmployeePanel from '../others/EmployeePanel.jsx'
function AdminDashboard() {
    
    return (
        <div className='h-screen w-full p-10'>
            <Header username={"Abhishek"}/>
            <CreateTask />
            <div id='tasklist' className='bg-[#1C1C1C] text-white p-5 h-48 rounded overflow-auto mt-5'>
                <EmployeePanel />
            </div>
        </div>
    )
}

export default AdminDashboard
