import React, { createContext } from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'
function EmployeeDashboard({loggedInUserData}) {
    console.log(loggedInUserData)
    
    return (
        <div className='text-white p-10 bg-[#1C1C1C] h-screen'>
            <Header username={loggedInUserData?.firstName} />
            <TaskListNumber taskCounts={loggedInUserData?.taskCount}/>
            <TaskList tasks={loggedInUserData?.tasks}/>
        </div>
    )
}

export default EmployeeDashboard
