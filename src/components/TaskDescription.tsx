import { GoPlusCircle, GoPencil } from "react-icons/go";
import TaskDetailsData from "../DB/tasks/taskDetails.json";
import SubTasks from "./SubTasks";
import TaskNotes from "./TaskNotes";

interface TaskDescriptionProps {
  id: string;
}

const TaskDescription = ({ id }: TaskDescriptionProps) => {
  const task = TaskDetailsData.find((task) => task.taskId === id);
  const { description } = task || { description: "No description available." };
  const { subtasks } = task || { subtasks: [] };
  return (
    <>
      <div className="flex items-center mb-6 gap-6">
        <h2 className="font-semibold text-lg text-gray-600">Description</h2>
        <ul className="flex items-center gap-6">
          {typeof description === "string" || description?.text === "" ? (
            <li>
              <GoPlusCircle className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </li>
          ) : (
            <li>
              <GoPencil className="text-gray-400 cursor-pointer hover:text-gray-600" />
            </li>
          )}
        </ul>
      </div>

      <p className="text-gray-600 mb-4 w-3/4">
        {typeof description === "string"
          ? description
          : description?.text || "No description available."}
      </p>

      <section className="border p-4 rounded-md grid grid-cols-3 gap-6 items-start">
        <SubTasks subtasks={subtasks} />
        <TaskNotes id={id} />
      </section>
    </>
  );
};

export default TaskDescription;
