import { useLocation } from "react-router-dom";
import Sidebar from "../components/SideNav";
import Tasks from "../components/Tasks";
import Dashboard from "../components/Dashboard";

const Landing = () => {
  const location = useLocation();
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        {(location.pathname === "/" ||
          location.pathname === "/userid/dashboard") && <Dashboard />}
        {location.pathname === "/userid/tasks" && <Tasks />}
      </div>
    </section>
  );
};

export default Landing;
