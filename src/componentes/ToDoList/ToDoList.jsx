import { ToDoFilters } from "../ToDoFilters"

const ToDoList = ({children}) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {children}
            <ToDoFilters/>
        </div>
    )
}

export {ToDoList}