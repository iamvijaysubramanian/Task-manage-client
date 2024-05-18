import "./App.css";
import FilterBar from "./Components/FilterBar";
import Navbar from "./Components/Navbar";
import { TaskProvider } from "./Context/TaskContext";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <>
      <TaskProvider>
        <Navbar />
        <FilterBar />
        <TaskList />
      </TaskProvider>
    </>
  );
}

export default App;
