import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

type CreateTaskModalProps = {
  closeModal: () => void;
};

const CreateTaskModal = ({ closeModal }: CreateTaskModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    category: "Work",
    priority: "Low",
  });
  const [error, setError] = useState({
    title: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (formData.title.trim() === "") {
      setError({ title: "title", message: "Task title is required." });
      toast.error("Task title is required.");
      return;
    }
    if (formData.dueDate.trim() === "") {
      setError({ title: "date", message: "Due date is required." });
      toast.error("Due date is required.");
      return;
    }
    if (formData.category.trim() === "") {
      setError({ title: "category", message: "Category is required." });
      toast.error("Category is required.");
      return;
    }
    if (formData.priority.trim() === "") {
      setError({ title: "priority", message: "Priority is required." });
      toast.error("Priority is required.");
      return;
    }

    try {
      // Generate a uuid for the new task
      const uuid = () => {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (c) {
            const r = (Math.random() * 16) | 0,
              v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }
        );
      };
      const newTask = {
        id: uuid(),
        title: formData.title,
        dueDate: formData.dueDate,
        category: formData.category,
        priority: formData.priority,
        completed: false,
      };
      // save new task to DB/tasks.json

      toast.success("Task created successfully!");

      // Reset form and close modal
      setFormData({
        title: "",
        dueDate: "",
        category: "Work",
        priority: "Low",
      });
      setError({ title: "", message: "" });
      closeModal();
    } catch (error) {
      toast.error("Failed to create task. Please try again.");
    }
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
            className="block text-slate-700 mb-2 text-sm font-semibold tracking-wide"
            htmlFor="taskTitle">
            Task Title
          </label>
          <input
            type="text"
            id="taskTitle"
            className="w-full p-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white placeholder:text-slate-400 text-slate-800 shadow-sm hover:border-slate-300"
            placeholder="Enter task title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          {error.title === "title" && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-700 mb-2 text-sm font-semibold tracking-wide"
            htmlFor="dueDate">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            className="w-full p-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white text-slate-800 shadow-sm hover:border-slate-300"
            value={formData.dueDate}
            onChange={(e) =>
              setFormData({ ...formData, dueDate: e.target.value })
            }
          />
          {error.title === "date" && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-700 mb-2 text-sm font-semibold tracking-wide"
            htmlFor="category">
            Category
          </label>
          <select
            id="category"
            className="w-full p-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 cursor-pointer"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }>
            <option>Work</option>
            <option>Personal</option>
            <option>Health</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Other</option>
          </select>
          {error.title === "category" && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-700 mb-2 text-sm font-semibold tracking-wide"
            htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className="w-full p-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 bg-white text-slate-800 shadow-sm hover:border-slate-300 cursor-pointer"
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          {error.title === "priority" && (
            <p className="text-red-500 text-xs mt-1">{error.message}</p>
          )}
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
