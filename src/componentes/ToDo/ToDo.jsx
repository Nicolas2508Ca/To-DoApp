const ToDo = () => {
    return(
        <div className="flex items-center justify-between p-4 bg bg-gray-700 border-b  border-solid border-gray-600">
            <div className="flex items-center">
                <span className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer">
                </span>
                <p className="pl-3">
                    To Do Item
                </p>
            </div>
            <img className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in-out" src="/close-icon.svg" alt="close Icon"></img>
        </div>
    )
}

export {ToDo}