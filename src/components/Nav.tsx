import {useState} from "react";
import { CgAbstract } from "react-icons/cg";
import { Link } from "react-router-dom";
import { CiSearch, CiBellOn, CiBellOff } from "react-icons/ci";
import profilePic from "../assets/images/profile_picture_man.webp";

const Nav = () => {
    const [isBellOn, setIsBellOn] = useState(true);

    const toggleBell = () => {
        setIsBellOn(!isBellOn);
    };

    return (
        <nav className="p-4 flex items-center justify-between border-b border-gray-300">
            
            <Link to="/" className="flex items-center gap-2">
                <div className="bg-blue-500 p-2 rounded-md text-white">
                    <CgAbstract size={30} />
                </div>
                <h1 className="text-blue-500 text-xl font-bold">My Organiser</h1>  
            </Link>
            <div>
                {/* Placeholder for future nav items or spacing */}

            </div>
            <ul className="flex items-center gap-4">
                <li className="cursor-pointer nav-item"><CiSearch size={24} /></li>
                {isBellOn ? <li onClick={toggleBell} className="cursor-pointer nav-item"><CiBellOn size={24} /></li> : <li className="cursor-pointer nav-item"onClick={toggleBell}><CiBellOff size={24} /></li>}
                <li className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                    <img src={profilePic} alt="Profile" className="object-cover rounded-full" />
                </li>
            </ul>
        </nav>
    )
}

export default Nav