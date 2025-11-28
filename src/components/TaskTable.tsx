import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import TaskItem from "./TaskItem";
import type { TaskItemProps } from "../interfaces/Interface";

type TaskTableProps = {
  tasks?: TaskItemProps[];
};

const TaskTable = ({ tasks }: TaskTableProps) => {
  const [activeCategory, setActiveCategory] = useState("All Tasks");

  const handleClick = (category: string) => {
    setActiveCategory(category);
  };

  const categories = [
    "All Tasks",
    "Work",
    "Personal",
    "Health",
    "Finance",
    "Education",
    "Other",
  ];
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <ul className="grid grid-cols-7 items-center justify-between p-1 text-sm text-gray-600 font-semibold rounded-lg bg-gray-100 w-[80%]">
          {categories.map((category) => (
            <li
              key={category}
              className={
                category === activeCategory
                  ? "task-catergory-item--active"
                  : "task-catergory-item"
              }
              onClick={() => handleClick(category)}>
              {category}
            </li>
          ))}
        </ul>
        <ul className="text-sm font-semibold text-gray-700 flex items-center gap-4">
          <li className="cursor-pointer border p-2 rounded-lg flex items-center gap-4">
            Priority <GoChevronDown className="inline-block mt-1" />
          </li>
          <li className="cursor-pointer border p-2 rounded-lg flex items-center gap-4">
            Due Date <GoChevronDown />
          </li>
        </ul>
      </div>
      <div className="border rounded-lg shadow-sm p-4">
        <ul className="w-full border-collapse">
          {tasks?.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
              category={task.category}
              priority={task.priority}
            />
          ))}
          {tasks?.length === 0 ||
            (!tasks && (
              <p className="text-center text-gray-500">No tasks available.</p>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default TaskTable;
