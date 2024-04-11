import useSWR from "swr";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function App() {
  const { data, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/todos",
    fetcher
  );

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {data.map((todo) => (
        <p>{todo.title}</p>
      ))}
    </>
  );
}

export default App;
