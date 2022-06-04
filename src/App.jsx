/* import ItemCount from "./components/ClickTracker/ItemCount"; */

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App palta-background h-100">
      <Navbar />
      <ItemListContainer />
      {/* <ItemCount
        stock={14}
        inicial={1}
        onAdd={(cantidad) => {
          console.log(`Se han agregado ${cantidad} items al carrito.`);
        }}
      /> */}
    </div>
  );
}

export default App;
