import TaskNote from "./TaskNote";
import { GoPlusCircle } from "react-icons/go";
import TaskNotesData from "../DB/tasks/taskNotes.json";

interface TaskNotesProps {
  id: string;
}
const TaskNotes = ({ id }: TaskNotesProps) => {
  const noteData = TaskNotesData.filter((note) => note.taskId === id);
  const { notes } = noteData[0] || { notes: [] };
  return (
    <section className="">
      <div className="border-b border-gray-300">
        <h3 className="font-semibold text-gray-800 mb-6">Notes & Comments</h3>

        <ul className="">
          {notes?.map((individualNote) => (
            <li key={individualNote.id} className="">
              <TaskNote note={individualNote.text} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex flex-col items-end gap-2">
        <textarea
          name=""
          id=""
          className="border w-full rounded-md p-2 border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Add a comment..."></textarea>
        <button className="button-primary text-sm font-semibold">
          Post Comment
        </button>
      </div>
    </section>
  );
};

export default TaskNotes;
