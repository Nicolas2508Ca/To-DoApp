import { Title } from "./componentes/Title";
import { TodoInput } from "./componentes/ToDoInput";
import { ToDoList } from "./componentes/ToDoList";
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 4;

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTodos, setFilterdTodos] = useState(todos);

  const [descriptions, setDescriptions] = useState(JSON.parse(localStorage.getItem('descriptions')) || {});
   
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

    const newDescriptions = { ...descriptions };
    delete newDescriptions[id];
    setDescriptions(newDescriptions);
    localStorage.setItem('descriptions', JSON.stringify(newDescriptions));
  }

  const handleClearComplete = () => {
    const updateList = todos.filter(todo => !todo.completed);
    const newDescriptions = { ...descriptions };
    todos.forEach(todo => {
        if (todo.completed) {
            delete newDescriptions[todo.id];
        }
    });
    setTodos(updateList);
    setDescriptions(newDescriptions);
    localStorage.setItem('descriptions', JSON.stringify(newDescriptions));
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

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  let activeTodos;
  switch (activeFilter) {
    case 'all':
      activeTodos = todos.length;
      break;
    case 'active':
      activeTodos = todos.filter(todo => !todo.completed).length;
      break;
    case 'completed':
      activeTodos = todos.filter(todo => todo.completed).length;
      break;
    default:
      activeTodos = todos.length;
  }
  return (
    <div className="overflow-y-hidden bg-gray-900 min-h-screen h-1 font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput 
        addTodo={addTodo} />
        <ToDoList 
        todos={currentTodos} 
        handleSetComplete={handleSetComplete}
        handleDelete={handleDelete}
        showAllTodos={showAllTodos}
        showActiveTodos={showActiveTodos}
        showCompletedTodos={showCompletedTodos}
        handleClearComplete={handleClearComplete}
        activeTodos={activeTodos}
        descriptions={descriptions}
        setDescriptions={setDescriptions}
        />
        <div className="flex items-center justify-center mt-8">
          <img src="/arrow-left.svg" alt="" className="pr-1 cursor-pointer rounded-2xl h-8 w-8 bg-gray-500 mr-8" onClick={() => {
            if (currentPage > 1) {
              setCurrentPage(currentPage - 1)
            }
          }}></img>
          <img src="/arrow-right.svg" alt="" className="pl-1 cursor-pointer rounded-2xl h-8 w-8 bg-gray-500" onClick={() => {
            if ((currentPage * todosPerPage) < filteredTodos.length) {
              setCurrentPage(currentPage + 1)
            }
          }}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
