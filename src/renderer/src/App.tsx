import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
// import { decrement, increment } from "./redux/features/counter/counterSlice";
import ModalItemManager from "./components/modals/ModalItemManager";
import { itemsList } from "./types/itemList";

function App(): React.JSX.Element {
  // const { value: count } = useAppSelector((state) => state.counter);
  // const dispatch = useAppDispatch();

  const [data, setData] = useState<itemsList[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [isItemManagerOpen, setIsItemManagerOpen] = useState<boolean>(false);

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

  const abrirArquivo = async () => {
    try {
      const resultado = await window.bridge.getDados();
      setData(resultado)
    } catch (error) {
      console.error('Erro ao abrir arquivo:', error);
    }
  };

  const armazenarArquivo = async () => {
    try {
      await window.bridge.saveDados(data);
    } catch(err) {
      throw err
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button onClick={abrirArquivo}>Abrir Arquivo</button>
      <button onClick={armazenarArquivo}>Armazenar Arquivo</button>
      {data.map(item => <div key={item.id}>{item.environment}</div>)}
      {/* <div id="test-redux">
        <p>Count test redux: {count}</p>
        <button onClick={() => dispatch(increment(2))}>Teste Redux Add</button>
        <button onClick={() => dispatch(decrement(2))}>Teste Redux Delete</button>
      </div> */}
      {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Download</span>
      </button> */}
      <div className="">
        <label htmlFor="search">
          <input type="text" placeholder="Filtrar" value={filter} onChange={handleFilterInput} />
          <select id="search">
            <option value="environment">Runtime Environment</option>
            <option value="version">Version</option>
            <option value="path">Path</option>
            <option value="command">Command</option>
          </select>
        </label>
        <button onClick={() => setIsItemManagerOpen(prev => !prev)}>Add options</button>
        <ModalItemManager isItemManagerOpen={isItemManagerOpen} setIsItemManagerOpen={setIsItemManagerOpen} />
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
