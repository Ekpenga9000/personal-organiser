import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import TaskTable from "./TaskTable";
import CreateTaskModal from "./CreateTaskModal";
import ModalWrapper from "./ModalWrapper";
import taskData from "../DB/tasks.json";

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
      <h2 className="text-3xl font-bold mb-4">Task Manager</h2>
      <p className="text-gray-500 mb-4">
        Organize your daily tasks by category, priority, and deadline to stay on
        track.
      </p>

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
