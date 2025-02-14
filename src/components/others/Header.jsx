import React from 'react'


function Header({username}) {
    function logoutHandler(){
        localStorage.removeItem('loggedInUser')
        window.location.reload()
    }
    return (
        <div className='flex text-white items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
            <button onClick={logoutHandler} className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header
