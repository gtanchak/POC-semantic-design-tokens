import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios, clearCache } from "../axios";

const DashboardPage = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => setTodos(res.data))
    .catch((error) => console.error("Error fetching todos:", error));

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home
      </button>
      <button
        onClick={() => clearCache()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Clear Cache
      </button>
      <ul className=" text-sm font-medium text-blue-600 bg-white border border-gray-200 rounded-lg ">
        {todos.map((todo: { title: string }, index) => (
          <li
            key={index}
            className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
