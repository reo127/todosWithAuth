import React, { useState, useEffect } from 'react'
import InputTodo from './InputTodo'
import TodoList from './TodoList'



const TodoHome = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
      getUser()
    }, [])
    

    const getUser = async () => {
        const responce = await fetch('http://localhost:8000/auth/dashbord', {
            method: 'get',
            credentials: "include"
        })

        const userData = await responce.json()
        setUser( await userData )
    }
    console.log(user._id)

    return (
        <section className="text-gray-600 body-font overflow-hidden" >
            <div className="container px-5 py-24 mx-auto">
            <h1> {user.name} - {user.email} </h1>
                <div className="flex items-start flex-wrap -m-12">
                    <div className="p-12 md:w-1/2 flex flex-col items-start mt-4">
                        <InputTodo />
                    </div>
                    <div className="p-12 md:w-1/2 flex flex-col items-start">
                        <TodoList todos={user?.tasks} userid={user._id} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default TodoHome