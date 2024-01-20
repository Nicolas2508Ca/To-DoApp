const ToDo = ({ todo, handleSetComplete, handleDelete }) => {

    const { id, title, completed } = todo
    return(
        <div className="flex items-center justify-between p-4 bg bg-gray-700 border-b  border-solid border-gray-600">
            <div className="flex items-center">
                {
                    completed ? (
                        <div onClick={() => handleSetComplete(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
                            <img className="h-4 w-4" src="/check-icon.svg" alt="check Icon"></img>
                        </div>
                    ) : (
                        <span onClick={() => handleSetComplete(id)}  className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={"ml-3 pl-3 " + (completed && "line-through")}>
                    {title}  
                </p>
            </div>
            <img onClick={() => handleDelete(id)} className="h-4 w-4 cursor-pointer transition-all duration-300 ease-in-out" src="/close-icon.svg" alt="close Icon"></img>
        </div>
    )
}

export { ToDo }