import React, { useState } from 'react'
import Search from './Search'

const InputTodo = ({todos}) => {
    const [todoItem, setTodoItem] = useState('')


    // Add todo
    const saveTodo = async () => {
       await fetch('http://localhost:8000/app/addtodo', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            credentials: "include",
            body: JSON.stringify({ "tasks": todoItem })
        }).then(console.log('Added seccessfull'))
            .catch(err => console.log(err))
        setTodoItem('')
    }




    return (
        <div>
            <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
                <div className="relative sm:mb-0 flex-grow w-full">
                    {/* <label for="full-name" className="leading-7 text-sm text-gray-400">Todo</label> */}
                    <input type="text" placeholder='What for Today' id="full-name" name="full-name" className="w-full lg:w-[30vw] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        onChange={(e) => setTodoItem(e.target.value)}
                        value={todoItem}
                    />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg flex items-center font-semibold"
                    onClick={saveTodo}
                >
                    Save
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>

            <Search todos={todos}/>
        </div>
    )
}

export default InputTodo