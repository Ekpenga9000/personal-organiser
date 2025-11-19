import { useState } from "react";
import { GoPencil, GoChevronDown } from "react-icons/go";

const TaskTable = () => {
  const [activeCategory, setActiveCategory] = useState("All Tasks");

  const handleClick = (category: string) => {
    setActiveCategory(category);
  };

  const categories = ["All Tasks", "Work", "Personal", "Health", "Finance"];
  return (
    <div className="flex items-center justify-between mb-6">
      <ul className="grid grid-cols-5 items-center justify-between p-1 text-sm text-gray-600 font-semibold rounded-lg bg-gray-100 w-[80%]">
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
  );
};

export default TaskTable;
