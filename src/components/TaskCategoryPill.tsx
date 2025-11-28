interface TaskCategoryPillProps {
  category: string;
  onClick?: (arg: string) => void;
}

const TaskCategoryPill = ({ category, onClick }: TaskCategoryPillProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  const makeClickable = onClick ? "cursor-pointer" : "";
  return (
    <span
      className={
        "inline-block bg-gray-100 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full mr-2 " +
        makeClickable
      }
      onClick={handleClick}>
      {category}
    </span>
  );
};

export default TaskCategoryPill;
