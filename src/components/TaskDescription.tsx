import TaskDetailsData from "../DB/tasks/taskDetails.json";
import SubTasks from "./SubTasks";
import TaskNotes from "./TaskNotes";
import { GoIssueClosed, GoPencil } from "react-icons/go";

interface TaskDescriptionProps {
  id: string;
}

const TaskDescription = ({ id }: TaskDescriptionProps) => {
  const task = TaskDetailsData.find((task) => task.taskId === id);
  const { description } = task || { description: "No description available." };
  const { subtasks } = task || { subtasks: [] };
  return (
    <section>
      <div className="flex border-b border-gray-300 pb-4 mb-6">
        <p className="text-gray-600 mb-4 w-3/4">
          {typeof description === "string"
            ? description
            : description?.text || "No description available."}
        </p>
      </div>
      <ul className="flex items-center justify-end gap-4 text-sm mb-6">
        <li>
          <button className="button-secondary">
            <GoPencil />
            <span className="font-semibold">Edit Task</span>
          </button>
        </li>
        <li>
          <button className="button-primary">
            <GoIssueClosed />{" "}
            <span className="font-semibold">Mark as Complete</span>
          </button>
        </li>
      </ul>
      <section className="p-4 rounded-md  items-start">
        <SubTasks subtasks={subtasks} />
        <TaskNotes id={id} />
      </section>
    </section>
  );
};

export default TaskDescription;
