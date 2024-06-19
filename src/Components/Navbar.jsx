import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddTaskModal from "../Modals/AddTaskModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="bg-blue-800 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div>
          <span className="text-white text-lg font-bold">Task Manager</span>
        </div>

        <div>
          <button
            className="bg-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={openModal}
          >
            Add Task
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      <AddTaskModal isOpen={isModalOpen} closeModal={closeModal} />
    </nav>
  );
}

export default Navbar;
