import React from 'react'
import { useState } from 'react'

function Login({handleLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function formHandler(e){
        e.preventDefault()
        handleLogin(email, password)
        console.log(`Email: ${email} Password: ${password}`)
    }
    return (
        <div className='flex h-screen w-screen items-center justify-center'>
         <div className='border-2 p-20 h-90 rounded-2xl border-emerald-600 flex'>
            <form onSubmit={(e) =>{
                formHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={
                    (e) => setEmail(e.target.value)
                }
                required
                className='border-2 border-emerald-600 text-white outline-none text-xl py-3 px-5 rounded-full placeholder:text-white' type="email" placeholder='Enter your email'/>
                <input
                value={password}
                onChange={
                    (e) => setPassword(e.target.value)
                } 
                required
                className='border-2 border-emerald-600 text-white outline-none text-xl mt-3 py-3 px-5 rounded-full placeholder:text-white' type="password" placeholder='Enter your password'/>
                <button className='bg-emerald-600 text-white outline-none text-xl mt-3 py-3 px-5 w-full rounded-full hover:bg-emerald-400 cursor-pointer'>Log in</button>
            </form>
         </div>
        </div>
    )
}

export default Login
