import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App(): React.JSX.Element {
  const { value: count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<string>("");

  interface itemsList {
    id: string;
    environment: string;
    version: string;
    path: string;
    command: string;
  }

  const items: itemsList[] = [
    { id: crypto.randomUUID(), environment: "NodeJS", version: "14.19.3", path: "C://user/dev", command: "npm run dev" },
    { id: crypto.randomUUID(), environment: ".NET", version: "14.19.3", path: "C://user/dev", command: "npm run dev" },
    { id: crypto.randomUUID(), environment: "NodeJS", version: "21.3.19", path: "C://user/dev", command: "npm run dev" },
    { id: crypto.randomUUID(), environment: "SEILA", version: "14.19.3", path: "C://user/dev", command: "npm run dev" }
  ]

  useEffect(() => {
    console.log("filter: ", filter);
  }, [filter])

  function handleFilterInput(e: React.ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div id="test-redux">
        <p>Count test redux: {count}</p>
        <button onClick={() => dispatch(increment(2))}>Teste Redux Add</button>
        <button onClick={() => dispatch(decrement(2))}>Teste Redux Delete</button>
      </div>
      <div>
        <label htmlFor="search">
          <input type="text" placeholder="Filtrar" value={filter} onChange={handleFilterInput} />
          <select id="search">
            <option value="environment">Runtime Environment</option>
            <option value="version">Version</option>
            <option value="path">Path</option>
            <option value="command">Command</option>
          </select>
        </label>
        <button>Add options</button>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Runtime Environment</th>
              <th>Version</th>
              <th>Path</th>
              <th>Command</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td>{item.environment}</td>
                <td>{item.version}</td>
                <td>{item.path}</td>
                <td>{item.command}</td>
                <td>
                  <button onClick={() => alert(`Delete: ${item.id}`)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => alert(`Editavel: ${item.id}`)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => alert(`Click: ${item.id}`)}>Run!</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => alert("Select All")}>Select All</button> {/**Deve marcar e desmarcar */}
        <button onClick={() => alert("Run Selected")}>Run Selected</button>
      </div>
    </div>
  )
}

export default App
