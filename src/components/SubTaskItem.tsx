import { GoPencil, GoDash } from "react-icons/go";

interface SubTaskItemProps {
  text: string;
}
const SubTaskItem = ({ text }: SubTaskItemProps) => {
  return (
    <div className="border border-gray-300 p-2 mb-2 shadow-sm rounded-md hover:bg-gray-50 flex justify-between items-center">
      <span>{text}</span>
      <ul className="flex gap-4">
        <li>
          <GoPencil className="text-gray-400 cursor-pointer hover:text-gray-600 float-right" />
        </li>
        <li>
          <GoDash className="text-gray-400 cursor-pointer hover:text-gray-600 float-right" />
        </li>
      </ul>
    </div>
  );
};

export default SubTaskItem;
