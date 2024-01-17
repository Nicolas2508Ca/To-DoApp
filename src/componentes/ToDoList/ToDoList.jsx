import { ToDoFilters } from "../ToDoFilters"
import { ToDo } from "../ToDo"

const ToDoList = ({ todos }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <ToDo key={todo.id} todo={todo} />
                )
            }   
            )}
            <ToDoFilters />
        </div>
    )
}

export { ToDoList }