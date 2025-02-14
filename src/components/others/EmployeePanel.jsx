import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import ShowUser from './ShowUser';

function EmployeePanel() {
    const [showUser, setShowUser] = useState(null);
    const userData = useContext(AuthContext);

    const employees = userData?.employees?.employees || [];

    const colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"];

    function userHandleClick(username) {
        setShowUser(username);

    }

    function goBack() {
        setShowUser(null);
    }

    return (
        <div>
            {showUser ? (
                <ShowUser email={showUser} goBack={goBack} />
            ) : (
                employees.map((emp, idx) => {
                    const randomColor = colors[idx % colors.length];

                    return (
                        <div key={emp.id} className={`${randomColor} mb-4 py-2 px-4 flex justify-between rounded`}>
                            <h2>{emp?.firstName}</h2>
                            <h3>{emp.tasks?.[0]?.taskTitle || "No Task Assigned"}</h3>
                            <button 
                                onClick={() => userHandleClick(emp?.email)} 
                                className="px-2 py-1 bg-black text-sm rounded-sm cursor-pointer hover:bg-gray-800"
                            >
                                See More
                            </button>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default EmployeePanel;
