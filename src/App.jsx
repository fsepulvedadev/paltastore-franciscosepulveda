import ItemCount from "./components/ClickTracker/ItemCount";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer mensaje="Hola estoy saludando desde el componente App 👋" />
      <ItemCount
        stock={14}
        inicial={1}
        onAdd={(cantidad) => {
          console.log(`Se han agregado ${cantidad} items al carrito.`);
        }}
      />
    </div>
  );
}

export default App;
