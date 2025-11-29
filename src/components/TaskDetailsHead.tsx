import { GoPencil, GoClock } from "react-icons/go";
import TaskPriorityPill from "./TaskPriorityPill";
import TaskCategoryPill from "./TaskCategoryPill";
import TaskData from "../DB/tasks/tasks.json";
import { formatDate } from "../utils/utilFunctions";

interface TaskDetailsHeadProps {
  id: string;
}

const TaskDetailsHead = ({ id }: TaskDetailsHeadProps) => {
  const task = TaskData.find((task) => task.id === id);

  //Create function that converts 2025-12-15 format to December 15, 2025

  return (
    <>
      <span className="font-semibold text-gray-600">Title</span>
      <div className="mb-8">
        <ul>
          <li className="flex items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold">{task?.title}</h1>
            <GoPencil className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </li>
          <li className="flex items-center gap-4">
            <span>
              <strong className="text-gray-600">Category:</strong>{" "}
              <TaskCategoryPill category={task?.category ?? ""} />
            </span>

            <span>
              <strong className="text-gray-600">Priority:</strong>{" "}
              <TaskPriorityPill
                priority={
                  (task?.priority as "High" | "Medium" | "Low") ?? "Low"
                }
              />
            </span>
          </li>
          <li className="flex items-center gap-2 mt-4">
            <span className="flex items-center gap-2">
              <GoClock className="text-gray-400" />
              <strong className="text-gray-600 mr-1">Due:</strong>
            </span>
            <span className="text-gray-500 text-sm font-medium">
              {task ? formatDate(task.dueDate) : "No due date set"}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TaskDetailsHead;
