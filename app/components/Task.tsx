import Image from "next/image";
import reminderIcon from "../../public/reminder.svg";
import editIcon from "../../public/edit.svg";
import deleteIcon from "../../public/delete.svg";

interface Task {
  name: string;
  importance: number;
}

export default function Task({
  name,
  importance,
}: {
  name: string;
  importance: number;
}) {
  return (
    <li className="p-3 shadow border rounded flex justify-between items-center">
      <p>{name}</p>
      <div className="flex gap-x-2">
        <button className="shadow border p-1 rounded font-semibold w-[34px] h-[34px] hover:bg-gray-100">
          {importance}
        </button>
        <button className="shadow border p-1 rounded hover:bg-gray-100">
          <Image src={reminderIcon} alt="reminder" />
        </button>
        <button className="shadow border p-1 rounded hover:bg-gray-100">
          <Image src={editIcon} alt="edit" />
        </button>
        <button className="shadow border p-1 rounded hover:bg-gray-100">
          <Image src={deleteIcon} alt="delete" />
        </button>
      </div>
    </li>
  );
}
