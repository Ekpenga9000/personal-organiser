import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { GoHome, GoTasklist, GoProject, GoGear, GoCalendar, GoGoal, GoNote, GoPlus } from "react-icons/go";

const SideNav = () => {
    const [isClicked, setIsClicked] = useState("Dashboard");
    const navigate = useNavigate();

   const handleClick = (item: string) => {
     setIsClicked(item);
     navigate(`/userid/${item.toLowerCase()}`);
   }
    return (
        <section className="w-64 h-full p-4 border-r border-gray-200 min-h-screen">
            <ul className="space-y-4">
                <li className={ isClicked === "Dashboard" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Dashboard")}><GoHome /> Dashboard</li>
                <li className={ isClicked === "Projects" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Projects")}><GoProject /> Projects</li>
                <li className={ isClicked === "Tasks" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Tasks")}><GoTasklist /> Tasks</li>
                <li className={ isClicked === "Calendar" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Calendar")}><GoCalendar /> Calendar</li>
                <li className={ isClicked === "Goals" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Goals")}><GoGoal /> Goals</li>
                <li className={ isClicked === "Notes" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Notes")}><GoNote /> Notes</li>
                <li className="flex items-center cursor-pointer justify-between bg-gray-100 p-2 rounded">New Category <div className="text-blue-500"><GoPlus /></div></li>

                <li className={ isClicked === "Settings" ? "side-nav-item side-nav-item--clicked" : "side-nav-item"} onClick={() => handleClick("Settings")}> <GoGear /> Settings</li>
            </ul>
        </section>
    )
}

export default SideNav