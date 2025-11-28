import { GoPencil } from "react-icons/go";
import type { TaskItemProps } from "../interfaces/Interface";
import { Link } from "react-router-dom";
import TaskPriorityPill from "./TaskPriorityPill";
import TaskCategoryPill from "./TaskCategoryPill";

const TaskItem = ({
  id,
  title,
  dueDate,
  category,
  priority,
  onClick,
}: TaskItemProps) => {
  return (
    <li className="grid grid-cols-6 justify-between items-center gap-4 p-2 border rounded-lg hover:bg-gray-50">
      <div className="flex col-span-4 items-center gap-2">
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        <Link to={`/tasks/${id}`} className="">
          <p className="text-gray-800 font-semibold">{title}</p>
          <p className="text-gray-500 text-xs font-light">(Due: {dueDate})</p>
        </Link>
      </div>

      <div className="col-span-1 flex justify-end">
        <TaskCategoryPill category={category} onClick={onClick} />
      </div>

      <ul className="flex items-center justify-end gap-8">
        <li className="">
          <TaskPriorityPill priority={priority} />
        </li>
        <li className="">
          <GoPencil className="text-gray-400 cursor-pointer" />
        </li>
      </ul>
    </li>
  );
};

export default TaskItem;
