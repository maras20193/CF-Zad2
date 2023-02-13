import { PaginatedTable } from "./components";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <PaginatedTable dataEntries={data} />
    </div>
  );
}

export default App;
