import { ToDoFilters } from "../ToDoFilters"
import { ToDo } from "../ToDo"

const ToDoList = ({ todos, handleSetComplete, handleDelete, activeFilter, showActiveTodos, showAllTodos, showCompletedTodos, handleClearCompleted }) => {
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
            <ToDoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearCompleted={handleClearCompleted}
            />
        </div>
    )
}

export { ToDoList }