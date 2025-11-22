export interface TaskItemProps {
  title: string;
  dueDate: string;
  category: string;
  priority: "Low" | "Medium" | "High";
}
