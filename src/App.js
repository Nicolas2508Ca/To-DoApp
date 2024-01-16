import {Title} from "./componentes/Title";
import { ToDoInput } from "./componentes/ToDoInput";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <ToDoInput />
      </div>
    </div>
  );
}

export default App;
