import { FormEvent, useState, ChangeEvent } from "react";
import { createTaskRequest } from "../api/task";
import { useTask } from "../context/useTask";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });
  const { createTask } = useTask();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        placeholder="Write a Title"
        onChange={handleChange}
      ></input>

      <textarea
        name="description"
        rows={3}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
        placeholder="Write a Description"
        onChange={handleChange}
      ></textarea>

      <label className="inline-flex items-center gap-x-2">
        <input
          type="checkbox"
          className="h-5 w-5 text-indigo-600"
          onChange={(e) => setTask({ ...task, done: !task.done })}
        ></input>
        <span>Done</span>
      </label>

      <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
    </form>
  );
}

export default TaskForm;
