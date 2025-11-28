import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Notfound from "./pages/NotFound";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Nav />
      <Routes>
        {/* make /userid/["/", "dashboard", "tasks", "projects", "Calendar", "Goals", "Notes", "settings"] all connect to the Landing component */}
        <Route path="/" element={<Landing />} />
        <Route path="/userid/tasks" element={<Landing />} />
        <Route path="/tasks/:taskId" element={<Landing />} />
        <Route path="/userid/projects" element={<Landing />} />
        <Route path="/userid/dashboard" element={<Landing />} />
        <Route path="/userid/calendar" element={<Landing />} />
        <Route path="/userid/goals" element={<Landing />} />
        <Route path="/userid/notes" element={<Landing />} />
        <Route path="/userid/settings" element={<Landing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
