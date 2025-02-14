import React from 'react'

function NewTask({task,color}) {
    return (
        <div className={`flex-shrink-0 flex flex-col justify-between p-5 h-full w-[300px] ${color} rounded-2xl overflow-auto`}>
            <div>
            <div className='flex items-center justify-between'>
              <h3 className='bg-red-600 px-3 py-2 text-sm rounded'>{task?.category}</h3>
              <h4 className='text-sm'>{task?.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{task?.taskTitle}</h2>
            <p className='text-sm mt-2 overflow-auto'>{task?.taskDescription}</p>
            </div>
            <div className='mt-4'>
                <button className='py-1 w-full px-2 text-sm bg-green-500 cursor-pointer hover:bg-green-400'>Accept Task</button>
            </div>
          </div>
    )
}

export default NewTask
