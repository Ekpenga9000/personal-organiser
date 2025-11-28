import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../components/SideNav";
import Tasks from "../components/Tasks";
import Dashboard from "../components/Dashboard";
import TaskDetails from "../components/TaskDetails";

const Landing = () => {
  const location = useLocation();
  const { taskId } = useParams();
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        {(location.pathname === "/" ||
          location.pathname === "/userid/dashboard") && <Dashboard />}
        {location.pathname === "/userid/tasks" && <Tasks />}
        {taskId && <TaskDetails id={taskId} />}
      </div>
    </section>
  );
};

export default Landing;
