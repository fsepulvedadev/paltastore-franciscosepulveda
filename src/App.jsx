import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer mensaje="Hola estoy saludando desde el componente App 👋" />
    </div>
  );
}

export default App;
