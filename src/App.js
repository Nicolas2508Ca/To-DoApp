import { Title } from "./componentes/Title";
import { TodoInput } from "./componentes/ToDoInput";
import { ToDoList } from "./componentes/ToDoList";
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
    id: 1,
    title: "Estudar programacion",
    completed: false,
    },
    {
    id: 2,
    title: "Completar el pase de batalla de fortnite",
    completed: false,
    },
    {
    id: 3,
    title: "Terminar One Piece",
    completed: false,
    },
    {
    id: 4,
    title: "Ser el mejor programador del mundo",
    completed: false,
    }
  ])

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilterdTodos] = useState(todos);
   
  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos]
    todoList.push(newTodo);
    setTodos(todoList);
  }

  const handleSetComplete = (id) => {
    const updateList = todos.map((todo) => {
      if(todo.id === id) {
        return{...todo, completed : !todo.completed}
      }
      return todo;
    })
    setTodos(updateList);
  }

  const handleDelete = (id) => {
    const updateList = todos.filter(todo => todo.id !== id)
    setTodos(updateList);
  }

  const handleClearCompleted = () => {
    const updateList = todos.filter(todo => !todo.completed)
    setActiveFilter(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter("all");
  }

  const showActiveTodos = () => {
    setActiveFilter("active");
  }

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  }

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo} />
        <ToDoList 
        todos={todos} 
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
