import TaskPriorityPill from "./TaskPriorityPill";
import TaskCategoryPill from "./TaskCategoryPill";
import TaskData from "../DB/tasks/tasks.json";
import { formatDate } from "../utils/utilFunctions";

interface TaskDetailsHeadProps {
  id: string;
}

const TaskDetailsHead = ({ id }: TaskDetailsHeadProps) => {
  const task = TaskData.find((task) => task.id === id);

  const priority = task ? (task.priority as string) : "Low";
  //Create function that converts 2025-12-15 format to December 15, 2025

  return (
    <>
      <div className="mb-4">
        <ul className="flex items-center justify-between">
          <li className="">
            <h1 className="text-2xl font-bold">{task?.title}</h1>
            <span className="text-gray-500 text-sm font-medium">
              <strong className="text-gray-600 mr-1">Due:</strong>
              {task ? formatDate(task.dueDate) : "No due date set"}
            </span>
          </li>
          <li className="flex items-center gap-4">
            <span>
              <TaskCategoryPill category={task?.category ?? ""} />
            </span>

            <span>
              <TaskPriorityPill priority={priority + " Priority"} />
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TaskDetailsHead;
