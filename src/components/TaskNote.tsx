import profilePic from "../assets/images/profile_picture_man.webp";

interface TaskNoteProps {
  note: string;
}

const TaskNote = ({ note }: TaskNoteProps) => {
  return (
    <div className="flex items-start gap-4 text-sm mb-4 p-2">
      <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
        <img
          src={profilePic}
          alt="Profile"
          className="object-cover rounded-full"
        />
      </div>
      <div>
        <ul className="flex gap-4 text-gray-500 mb-2">
          <li className="font-semibold">Your comment</li>
          <li className="font-light">2 hours ago</li>
        </ul>
        <span className="cursor-pointer">{note}</span>
      </div>
    </div>
  );
};

export default TaskNote;
