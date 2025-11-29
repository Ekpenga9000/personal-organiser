import { GoPlusCircle } from "react-icons/go";
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
    <aside className="col-span-2">
      <div className="mb-4 flex items-center gap-2 justify-between bg-gray-100 p-2 rounded-md">
        <h3 className="font-semibold text-gray-800">Subtasks</h3>
        <GoPlusCircle className="text-gray-400 cursor-pointer hover:text-gray-600" />
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
