interface TaskPriorityPillProps {
  priority: "High" | "Medium" | "Low";
}

const TaskPriorityPill = ({ priority }: TaskPriorityPillProps) => {
  const colorClass =
    priority === "High"
      ? "bg-red-50 text-red-700"
      : priority === "Medium"
      ? "bg-yellow-50 text-yellow-700"
      : "bg-blue-50 text-blue-700";
  return (
    <span
      className={`${colorClass} text-xs font-semibold px-3 py-1 rounded-full`}>
      {priority}
    </span>
  );
};

export default TaskPriorityPill;
