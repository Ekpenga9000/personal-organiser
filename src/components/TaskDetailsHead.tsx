import { GoPencil, GoClock } from "react-icons/go";
import TaskPriorityPill from "./TaskPriorityPill";
import TaskCategoryPill from "./TaskCategoryPill";
import TaskData from "../DB/tasks/tasks.json";

interface TaskDetailsHeadProps {
  id: string;
}

const TaskDetailsHead = ({ id }: TaskDetailsHeadProps) => {
  const task = TaskData.find((task) => task.id === id);
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
            <GoClock className="text-gray-400" />
            <span className="text-gray-500 text-sm font-medium">
              {task?.dueDate ?? ""}
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TaskDetailsHead;
