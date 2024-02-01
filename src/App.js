import { Title } from "./componentes/Title";
import { TodoInput } from "./componentes/ToDoInput";
import { ToDoList } from "./componentes/ToDoList";
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const [activeFilter, setActiveFilter] = useState('all');
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

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed)
    setTodos(updateList);
  }

  const showAllTodos = () => {
    setActiveFilter('all');
  }

  const showActiveTodos = () => {
    setActiveFilter('active');
  }

  const showCompletedTodos = () => {
    setActiveFilter('completed');
  }

  useEffect(() => {
    if(activeFilter === 'all') {
      setFilterdTodos(todos);
    }else if(activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false)
      setFilterdTodos(activeTodos);
    }else if(activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true)
      setFilterdTodos(completedTodos);
    }
  },[activeFilter, todos])

  useEffect(() =>{
    let data = localStorage.getItem('todos')
    if (data){
      setTodos(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput 
        addTodo={addTodo} />
        <ToDoList 
        todos={filteredTodos} 
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
