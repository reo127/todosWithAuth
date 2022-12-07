import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();
        
        const loginUser = await fetch('http://localhost:8000/auth/login', {
            method: 'post',
            headers: {  'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ email, password })
        })
        setEmail('')
        setpassword('')
        
        const data = await loginUser.json()
        console.log(data)
        navigate('/')
    }


    return (
        <section className="text-gray-400 bg-gray-900 body-font h-[90vh]">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="  md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white font-medium title-font mb-5 text-3xl text-center">Login</h2>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" id="full-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setpassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className='w-full flex justify-center my-3'> <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleLogin}>Submit</button></div>
                </div>
            </div>
        </section>
    )
}

export default Login