export interface TaskItemProps {
  id: string;
  title: string;
  dueDate: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  onClick?: () => void;
}
