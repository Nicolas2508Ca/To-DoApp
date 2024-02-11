import { ToDoFilters } from "../ToDoFilters"
import { ToDo } from "../ToDo"
import { useState } from "react"

const ToDoList = (
    { 
    todos, 
    handleSetComplete, 
    handleDelete, 
    activeFilter, 
    showActiveTodos, 
    showAllTodos, 
    showCompletedTodos, 
    handleClearComplete,
    activeTodos,
    descriptions,
    setDescriptions}) => {
        const [openDescriptionId, setOpenDescriptionId] = useState(null);
            return (
                <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
                    {todos.map(todo => {
                        return (
                            <ToDo 
                            key={todo.id} 
                            todo={todo} 
                            handleSetComplete={handleSetComplete} 
                            handleDelete={handleDelete}
                            openDescriptionId={openDescriptionId}
                            setOpenDescriptionId={setOpenDescriptionId}
                            descriptions={descriptions}
                            setDescriptions={setDescriptions}
                            />
                        )
                    }   
                    )}
                    <ToDoFilters
                        activeFilter={activeFilter}
                        showAllTodos={showAllTodos}
                        showActiveTodos={showActiveTodos}
                        showCompletedTodos={showCompletedTodos}
                        handleClearComplete={handleClearComplete}
                        activeTodos={activeTodos}
                    />
                </div>
        )
}

export { ToDoList }