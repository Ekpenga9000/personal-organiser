import TaskDetailsHead from "./TaskDetailsHead";
import TaskDescription from "./TaskDescription";

type TaskDetailsProps = {
  id: string;
};

const TaskDetails = ({ id }: TaskDetailsProps) => {
  return (
    <section>
      <TaskDetailsHead id={id} />
      <TaskDescription id={id} />
    </section>
  );
};

export default TaskDetails;
