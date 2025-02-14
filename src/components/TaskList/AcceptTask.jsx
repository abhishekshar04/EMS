import React from 'react'

function AcceptTask({task,color}) {
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
            
              <div className='flex justify-between mt-5'>
                  <button className='bg-green-500 py-1 px-2 text-sm cursor-pointer hover:bg-green-400'>Mark as Completed</button>
                  <button className='bg-red-500 py-1 px-2 text-sm cursor-pointer hover:bg-red-400'>Mark as Failed</button>
              </div>
          </div>
    )
}

export default AcceptTask
