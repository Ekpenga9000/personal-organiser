import { GoPlusCircle, GoPencil } from "react-icons/go";
import TaskPriorityPill from "./TaskPriorityPill";
import TaskCategoryPill from "./TaskCategoryPill";

type TaskDetailsProps = {
  id: string;
};

const TaskDetails = ({ id }: TaskDetailsProps) => {
  return (
    <section>
      <span className="font-semibold text-gray-600">Title</span>
      <div className="mb-8">
        <ul>
          <li className="flex items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold">Complete project proposal</h1>
            <GoPencil className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </li>
          <li className="flex items-center gap-4">
            <span>
              <strong className="text-gray-600">Category:</strong>{" "}
              <TaskCategoryPill category="Work" />
            </span>

            <span>
              <strong className="text-gray-600">Priority:</strong>{" "}
              <TaskPriorityPill priority="High" />
            </span>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <span className="text-gray-500 text-sm font-medium">
              Due: Sept 15, 2024
            </span>
          </li>
        </ul>
      </div>

      <div className="flex items-center mb-6 gap-6">
        <h2 className="font-semibold text-lg text-gray-600">Description</h2>
        <ul className="flex items-center gap-6">
          <li>
            <GoPlusCircle className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </li>
          <li>
            <GoPencil className="text-gray-400 cursor-pointer hover:text-gray-600" />
          </li>
        </ul>
      </div>

      <p className="text-gray-600 mb-4 w-3/4">
        This task involves creating a comprehensive project proposal that
        outlines the scope, objectives, timeline, and deliverables for the
        upcoming project. The proposal should be well-structured and include all
        necessary details to get stakeholder approval.
      </p>

      <section className="border p-4 rounded-md grid grid-cols-3 gap-6 items-start">
        <aside className="col-span-2">
          <h3>Subtasks:</h3>
          <ul className="list-decimal list-inside">
            <li>Draft initial proposal document.</li>
            <li>Review with team members.</li>
            <li>Incorporate feedback and finalize.</li>
          </ul>
        </aside>
        <aside className="col-span-1">
          <h3>Notes:</h3>
          <ul className="list-disc list-inside">
            <li>Research similar projects for reference.</li>
            <li>Outline key objectives and deliverables.</li>
            <li>Set a realistic timeline for completion.</li>
          </ul>
        </aside>
      </section>
    </section>
  );
};

export default TaskDetails;
