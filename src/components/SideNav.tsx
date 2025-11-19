import { useState } from "react";
import { GoHome, GoTasklist, GoProject, GoGear, GoCalendar, GoGoal, GoNote, GoPlus } from "react-icons/go";

const SideNav = () => {
    const [isClicked, setIsClicked] = useState("Dashboard");

   const handleClick = (item: string) => {
     setIsClicked(item);
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
                <li className="flex items-center cursor-pointer justify-between bg-gray-100 p-2 rounded">New Category <GoPlus /></li>

                <li className="side-nav-item"> <GoGear /> Settings</li>
            </ul>
        </section>
    )
}

export default SideNav