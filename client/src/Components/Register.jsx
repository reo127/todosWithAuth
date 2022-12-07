import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    // Collecting input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const [isError, setIsError] = useState(false)


    // Create or register new user to database
    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== conformPassword) {
            setIsError("password and Comform Password not match")
            return
        }

        const registerUser = await fetch('http://localhost:8000/auth/register', {
            method: "post",
            headers : {  'Content-Type': 'application/json' },
            body: JSON.stringify({name, email, password })
        })

        setName('');
        setEmail('');
        setPassword('');
        setConformPassword('');

        const data =  await registerUser.json()
        console.log(data);
        navigate('/login')
    }



    const Error = () => {
        return (
            <>
                <div className="flex flex-row mx-auto mt-4 pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden dark:bg-gray-900 dark:border-violet-400">
                    <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leading-none rounded-full dark:bg-violet-400 dark:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </span>
                    <div className="flex-1 p-2">
                        <p className="text-sm dark:text-gray-100"> {isError} </p>
                    </div>
                    <button type="button" className="ml-6 p-2 dark:text-gray-400" onClick={() => setIsError(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </>
        )
    }


    return (
        <section className="text-gray-400 bg-gray-900 body-font h-[90vh]">
            <div className="container flex-col px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="  md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
                    <h2 className="text-white font-medium title-font mb-5 text-3xl text-center">Register</h2>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Name</label>
                        <input type="text" id="first-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" id="password-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="full-name" className="leading-7 text-sm text-gray-400">Conform Password</label>
                        <input type="password" id="cpassword-name" name="full-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            onChange={e => setConformPassword(e.target.value)}
                            value={conformPassword}
                        />
                    </div>
                    <div className='w-full flex justify-center my-3'> <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleRegister}>Submit</button></div>
                </div>
                {isError && <Error />}
            </div>
        </section>
    )
}

export default Register