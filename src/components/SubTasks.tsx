import { GoPlus } from "react-icons/go";
import SubTaskItem from "./SubTaskItem";

interface Subtask {
  id: string;
  text: string;
}

interface SubTasksProps {
  subtasks: Subtask[];
}

const SubTasks = ({ subtasks }: SubTasksProps) => {
  return (
    <aside className="mb-10">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Subtasks</h3>
        <button className="button-secondary text-sm">
          <GoPlus />
          <span className="font-semibold">Add Subtask</span>
        </button>
      </div>

      <ul className="list-inside">
        {subtasks?.map((subtask) => (
          <li key={subtask?.id}>
            <SubTaskItem text={subtask?.text} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SubTasks;
