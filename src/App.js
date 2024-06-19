import "./App.css";
import FilterBar from "./Components/FilterBar";
import Navbar from "./Components/Navbar";
import { TaskProvider } from "./Context/TaskContext";
import TaskList from "./Components/TaskList";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
  };
  return (
    <Router>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <>
                  <Navbar />
                  <FilterBar />
                  <TaskList />
                </>
              </ProtectedRoute>
            }
          />
        </Routes>
      </TaskProvider>
    </Router>
  );
}

export default App;
