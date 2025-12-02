import { useState } from "react";
import { GoPlus } from "react-icons/go";
import TaskTable from "./TaskTable";
import CreateTaskModal from "./CreateTaskModal";
import ModalWrapper from "./ModalWrapper";
import taskData from "../DB/tasks/tasks.json";

type TaskItemProps = {
  id: string;
  title: string;
  dueDate: string;
  category: string;
  priority: "High" | "Medium" | "Low";
};

const Tasks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Task Manager</h2>
          <p className="text-gray-500 mb-4">
            Organize your daily tasks by category, priority, and deadline to
            stay on track.
          </p>
        </div>

        <button
          onClick={toggleModal}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-6">
          <GoPlus />
          Add New Task
        </button>
      </div>

      <TaskTable tasks={taskData as TaskItemProps[]} />
      {isModalOpen && (
        <ModalWrapper onClose={toggleModal}>
          <CreateTaskModal closeModal={toggleModal} />
        </ModalWrapper>
      )}
    </section>
  );
};

export default Tasks;
