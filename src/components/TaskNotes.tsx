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
    <aside className="col-span-1 border-l pl-4">
      <div className="mb-4 flex items-center gap-2 justify-between bg-gray-100 p-2 rounded-md">
        <h3 className="font-semibold text-gray-800">Notes</h3>
        <GoPlusCircle className="text-gray-400 cursor-pointer hover:text-gray-600" />
      </div>
      <ul className="">
        {notes?.map((individualNote) => (
          <li key={individualNote.id} className="">
            <TaskNote note={individualNote.text} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default TaskNotes;
