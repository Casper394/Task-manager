import Task from "./components/Task";

export default function TaskManager() {
  return (
    <div className="mt-[100px] mx-auto shadow-lg w-max p-[1rem] border rounded-lg">
      <h1 className="font-semibold text-2xl">Task Manager</h1>
      <br />
      <form className="flex gap-x-3">
        <div className="flex gap-x-3">
          <input
            type="text"
            className="w-[70%] border rounded-lg outline-none p-1 pl-3"
            placeholder="Task"
          />
          <input
            type="number"
            className="w-[30%] border rounded-lg outline-none p-1 pl-3"
            placeholder="Importance"
          />
        </div>
        <input
          type="submit"
          className="border rounded-lg outline-none p-1 px-2 hover:cursor-pointer hover:bg-gray-100"
          value="Submit"
        />
      </form>
      <div className="flex gap-x-2 mt-2">
        <button className="block border rounded-lg px-2 hover:bg-gray-100">
          sort
        </button>
        <button className="block border rounded-lg px-2 hover:bg-gray-100">
          filter
        </button>
      </div>
      <ul className="mt-10">
        <Task name="Some random task name" importance={4} />
      </ul>
    </div>
  );
}
