import { useState } from "react"

const TodoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <div className="mt-6 relative">
            <input 
                type="text" 
                className="focus:shadow-lg font-inter focus:shadow-blue-800 pl-4 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 ease-in-out"
                placeholder="Add a new todo"
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => handleTodo(e)}
                maxLength={40}
            />
        </div>   
    )
}

export {TodoInput}
