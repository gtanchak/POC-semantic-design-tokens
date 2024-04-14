import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "../axios";

const DashboardPage = () => {
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      {todos.map((todo: { title: string }) => (
        <>{todo?.title}</>
      ))}
    </div>
  );
};

export default DashboardPage;
