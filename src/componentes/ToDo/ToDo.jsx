import React, { useState } from 'react';

const ToDo = ({ todo, handleSetComplete, handleDelete, openDescriptionId, setOpenDescriptionId, descriptions, setDescriptions }) => {

    const { id, title, completed } = todo;

    const [description, setDescription] = useState(descriptions[id] || '');

    const handleBlur = () => {
        const newDescriptions = { ...descriptions, [id]: description };
        setDescriptions(newDescriptions);
        localStorage.setItem('descriptions', JSON.stringify(newDescriptions));
    };

    return(
        <>
        <div className="flex items-center justify-between p-4 bg bg-gray-700 border-b  border-solid border-gray-600">
            <div className="flex items-center">
                {
                    completed ? (
                        <span onClick={() => handleSetComplete(id)} className="border-solid border border-green-700 bg-green-700 p-3 rounded-full cursor-pointer"></span>
                    ) : (
                        <span onClick={() => handleSetComplete(id)}  className="border-solid border border-gray-500 rounded-full p-3 cursor-pointer"></span>
                    )
                }
                <p className={"ml-3 pl-3 " + (completed && "line-through")}>
                    {title}  
                </p>
            </div>
            <div className="flex" >
                <img onClick={() => setOpenDescriptionId(openDescriptionId !== id ? id : null)} alt="Observaciones" className="cursor-pointer h-5 w-5 text-right mr-5" src="/eye.svg"></img>
                <img onClick={() => handleDelete(id)} className="h-5 w-5 cursor-pointer transition-all duration-300 ease-in-out" src="/close-icon.svg" alt="close Icon"></img>
            </div>
        </div>
        {openDescriptionId === id && (
            <div className="p-4 bg bg-gray-700 border-b  border-solid border-gray-600">
                <input 
                onBlur={handleBlur}
                onChange={(e) => setDescription(e.target.value)} 
                value={description} 
                className="w-full pb-3 border-b-2 focus:border-white focus:outline-none bg-gray-700" 
                type="text" 
                placeholder="Enter description"
                maxLength={60} />
            </div>
        )}
        </>
    )
}

export { ToDo }