import "./App.scss";
import Container from "./component/Container";
import { ListProvider } from "./context/ListContext";

function App() {
  return (
    <div className="App">
      <ListProvider>
        <Container />
      </ListProvider>
    </div>
  );
}

export default App;
