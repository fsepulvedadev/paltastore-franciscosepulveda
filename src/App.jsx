/* import ItemCount from "./components/ClickTracker/ItemCount"; */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/pages/Home";
import OnSale from "./components/pages/OnSale";

function App() {
  return (
    <>
      <div className="App palta-background h-100 shadow-lg">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/on-sale" element={<OnSale />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <ItemCount
        stock={14}
        inicial={1}
        onAdd={(cantidad) => {
          console.log(`Se han agregado ${cantidad} items al carrito.`);
        }}
      /> */}
      </div>
    </>
  );
}

export default App;
