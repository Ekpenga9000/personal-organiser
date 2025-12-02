import { GoTrash } from "react-icons/go";

interface SubTaskItemProps {
  text: string;
}
const SubTaskItem = ({ text }: SubTaskItemProps) => {
  return (
    <ul className="border-b border-gray-300 pb-2 mb-4 hover:bg-gray-50 flex justify-between items-center text-sm">
      <li className="flex items-center gap-4">
        <input type="checkbox" className="" />
        <span className="cursor-pointer">{text}</span>
      </li>

      <li>
        <GoTrash className="text-gray-400 cursor-pointer hover:text-gray-600 float-right" />
      </li>
    </ul>
  );
};

export default SubTaskItem;
