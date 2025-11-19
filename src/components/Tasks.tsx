import { GoPlusCircle, GoPencil, GoChevronDown } from "react-icons/go";

const Tasks = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Task Manager</h2>
      <p className="text-gray-600 mb-4">
        Organize your daily tasks by category, priority, and deadline to stay on
        track.
      </p>

      <div className="flex items-center gap-3 border rounded-lg shadow-sm py-2 px-4 cursor-pointer mb-4">
        <GoPlusCircle />{" "}
        <span className="inline-block text-sm text-gray-500">
          Add a new task...
        </span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <ul className="flex items-center justify-between p-2 text-sm text-gray-600 font-semibold rounded-lg bg-gray-100 w-[80%]">
          <li>All Tasks</li>
          <li>Work</li>
          <li>Personal</li>
          <li>Health</li>
          <li>Finance</li>
        </ul>
        <ul className="text-sm font-semibold text-gray-700 flex items-center gap-4">
          <li className="cursor-pointer border p-2 rounded-lg flex items-center gap-4">
            Priority <GoChevronDown className="inline-block mt-1" />
          </li>
          <li className="cursor-pointer border p-2 rounded-lg flex items-center gap-4">
            Due Date <GoChevronDown />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Tasks;
