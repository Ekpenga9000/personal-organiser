import { useState } from "react";
import { GoPlusCircle } from "react-icons/go";
import TaskTable from "./TaskTable";
import CreateTaskModal from "./CreateTaskModal";
import ModalWrapper from "./ModalWrapper";

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

      <div
        className="flex items-center gap-3 border rounded-lg shadow-sm py-2 px-4 cursor-pointer mb-6"
        onClick={toggleModal}>
        <GoPlusCircle className="text-gray-600" />{" "}
        <span className="inline-block text-sm text-gray-500">
          Add a new task...
        </span>
      </div>

      <TaskTable />
      {isModalOpen && (
        <ModalWrapper onClose={toggleModal}>
          <CreateTaskModal closeModal={toggleModal} />
        </ModalWrapper>
      )}
    </section>
  );
};

export default Tasks;
