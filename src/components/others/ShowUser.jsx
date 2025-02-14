import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function ShowUser({ email ,goBack}) {
    const userData = useContext(AuthContext);
    const { employees } = userData;

    const user = employees.employees.find(emp => emp.email === email);
    console.log(user);

    return (
        <>
        <div>
            <button 
                onClick={goBack} 
                className="px-2 py-1 bg-black text-sm rounded-sm cursor-pointer hover:bg-gray-800"
            >
                Go Back
            </button>
        </div>
        <div className="flex justify-center items-center flex-col w-full">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <div className="flex justify-between bg-emerald-500 text-white text-xl font-bold px-4 py-2 rounded-md">
                    <span>{user?.firstName}</span>
                    <span>{user?.email}</span>
                </div>
                <div className="mt-4">
                    <h2 className="text-lg font-semibold mb-2">Tasks</h2>
                    <ul className="space-y-4">
                        {user?.tasks.map(task => (
                            <li key={task.taskTitle} className="bg-gray-900 p-4 rounded-lg shadow">
                                <h3 className="text-lg font-bold">{task.taskTitle}</h3>
                                <p className="text-gray-700">{task.taskDescription}</p>
                                <p className="text-gray-500 text-sm">{task.taskDate}</p>
                                <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-sm mt-2">
                                    {task.category}
                                </span>
                                <p className="mt-2 text-sm font-semibold text-gray-600">
                                    {task.active && <span className="text-yellow-500">Active </span>}
                                    {task.newTask && <span className="text-blue-500">New Task </span>}
                                    {task.completed && <span className="text-green-500">Completed </span>}
                                    {task.failed && <span className="text-red-500">Failed </span>}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default ShowUser;
