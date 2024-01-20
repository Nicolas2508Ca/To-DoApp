import { ToDoFilters } from "../ToDoFilters"
import { ToDo } from "../ToDo"

const ToDoList = ({ todos, handleSetComplete, handleDelete }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <ToDo 
                    key={todo.id} 
                    todo={todo} 
                    handleSetComplete={handleSetComplete} 
                    handleDelete={handleDelete}
                    />
                )
            }   
            )}
            <ToDoFilters />
        </div>
    )
}

export { ToDoList }