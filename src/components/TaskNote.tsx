import { GoKebabHorizontal } from "react-icons/go";

interface TaskNoteProps {
  note: string;
}

const TaskNote = ({ note }: TaskNoteProps) => {
  return (
    <div className="border border-gray-300 p-2 mb-2 shadow-sm rounded-md hover:bg-gray-50 flex justify-between items-center">
      <span className="cursor-pointer">{note}</span>
      <GoKebabHorizontal className="text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>
  );
};

export default TaskNote;
