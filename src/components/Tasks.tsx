import { GoPlusCircle } from "react-icons/go";
import TaskTable from "./TaskTable";

const Tasks = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Task Manager</h2>
      <p className="text-gray-600 mb-4">
        Organize your daily tasks by category, priority, and deadline to stay on
        track.
      </p>

      <div className="flex items-center gap-3 border rounded-lg shadow-sm py-2 px-4 cursor-pointer mb-6">
        <GoPlusCircle />{" "}
        <span className="inline-block text-sm text-gray-500">
          Add a new task...
        </span>
      </div>

      <TaskTable />
    </section>
  );
};

export default Tasks;
