import React from 'react'

function CreateTask() {
    return (
        <form className='w-full mt-10 '>
                    <div className="bg-[#1C1C1C] text-white p-6 rounded-lg w-full flex gap-5">
                        <div className="w-1/2 flex flex-col gap-5">
                            <div>
                            <label className="block text-sm mb-1">Task Title</label>
                            <input type="text" className="w-full p-2  rounded border border-white" placeholder="Make a UI design" />
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Date</label>
                            <input type="date" className="w-full p-2 rounded border border-white" />
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Assign to</label>
                            <input type="text" className="w-full p-2 rounded border border-white" placeholder="employee name" />
                            </div>
                            <div>
                            <label className="block text-sm mb-1">Category</label>
                            <input type="text" className="w-full p-2 rounded border border-white" placeholder="design, dev, etc" />
                            </div>
                        </div>
                        <div className="w-1/2">
                        <div>
                            <label className="block text-sm mb-1">Description</label>
                            <textarea id='tasklist' className="w-full p-2  rounded border border-white h-63" placeholder="Description" />
                            </div>
                            <button className="w-full bg-green-500 cursor-pointer hover:bg-green-600 text-white py-2 rounded">
                            Create Task
                            </button>
                        </div>
                        </div>
                </form>
    )
}

export default CreateTask
