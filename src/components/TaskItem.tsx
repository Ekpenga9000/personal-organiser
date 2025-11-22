import { GoPencil } from "react-icons/go";
import type { TaskItemProps } from "../interfaces/Interface";

const TaskItem = ({ title, dueDate, category, priority }: TaskItemProps) => {
  return (
    <li className="flex justify-between items-center gap-4 p-2 border rounded-lg hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center gap-2">
        <input type="checkbox" className="w-4 h-4" />
        <p className="text-gray-800 font-semibold">{title}</p>
        <p className="text-gray-500 text-xs font-light">(Due: {dueDate})</p>
      </div>

      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mr-2">
        {category}
      </span>

      <ul className="flex items-center gap-4">
        <li className="inline-block bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
          {priority}
        </li>
        <li>
          <GoPencil className="text-gray-400 cursor-pointer" />
        </li>
      </ul>
    </li>
  );
};

export default TaskItem;
