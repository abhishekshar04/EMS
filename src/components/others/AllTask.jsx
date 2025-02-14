import React from 'react'
import EmployeePanel from './EmployeePanel'

function AllTask() {
    return (
        <div id='tasklist' className='bg-[#1C1C1C] text-white p-5 h-48 rounded overflow-auto mt-5'>
            <EmployeePanel />
        </div>
    )
}

export default AllTask
