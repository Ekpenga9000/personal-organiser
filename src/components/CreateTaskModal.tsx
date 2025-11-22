import { useState } from "react";

type CreateTaskModalProps = {
  // onClose: () => void; // Uncomment if you want to handle modal close
  closeModal: () => void;
};

const CreateTaskModal = ({ closeModal }: CreateTaskModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    closeModal();
  };

  return (
    <div>
      {/* Modal content goes here */}
      <form onSubmit={handleSubmit} className="p-4 w-full bg-white rounded-lg">
        <h2 className="text-lg font-semibold text-gray-500 mb-4">
          Create New Task
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-500 mb-2 text-sm font-medium"
            htmlFor="taskTitle">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            className="w-full p-2 border rounded-lg"
            placeholder="Enter task title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 mb-2 text-sm font-medium"
            htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="w-full p-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 mb-2 text-sm font-medium"
            htmlFor="category">
            Category
          </label>
          <select id="category" className="w-full p-2 border rounded-lg">
            <option>Work</option>
            <option>Personal</option>
            <option>Health</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-500 mb-2 text-sm font-medium"
            htmlFor="priority">
            Priority
          </label>
          <select id="priority" className="w-full p-2 border rounded-lg">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm font-medium">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskModal;
