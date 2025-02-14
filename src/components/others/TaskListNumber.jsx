import React from 'react'

function TaskListNumber({taskCounts}) {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[45%] py-6 px-10 bg-blue-400 rounded-2xl'>
                <h2 className='text-3xl font-semibold'>{taskCounts?.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] py-6 px-10 bg-red-400 rounded-2xl'>
                <h2 className='text-3xl font-semibold'>{taskCounts?.active}</h2>
                <h3 className='text-xl font-medium'>Active</h3>
            </div>
            <div className='w-[45%] py-6 px-10 bg-yellow-400 rounded-2xl'>
                <h2 className='text-3xl font-semibold'>{taskCounts?.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-[45%] py-6 px-10 bg-green-400 rounded-2xl'>
                <h2 className='text-3xl font-semibold'>{taskCounts?.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
