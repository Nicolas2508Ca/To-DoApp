import { Title } from "./componentes/Title";
import { ToDoInput } from "./componentes/ToDoInput";
import { ToDoList } from "./componentes/ToDoList";
import { ToDo } from "./componentes/ToDo";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full font-inter text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <ToDoInput />
        <ToDoList>
          <ToDo />
          <ToDo />
          <ToDo />
          <ToDo />
        </ToDoList>
      </div>
    </div>
  );
}

export default App;
