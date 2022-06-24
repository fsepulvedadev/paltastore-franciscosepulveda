import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import { initializeApp } from "firebase/app";

function App() {
  const FirebaseConfig = {
    apiKey: "AIzaSyBehCjkRmePqVnqXnYhZXct70apNWf0b34",
    authDomain: "palta-store.firebaseapp.com",
    projectId: "palta-store",
    storageBucket: "palta-store.appspot.com",
    messagingSenderId: "1040224194570",
    appId: "1:1040224194570:web:c191e854c7736cde6c0ff3",
  };

  initializeApp(FirebaseConfig);

  return (
    <>
      <CartContextProvider>
        <div className="App palta-background h-100 shadow-lg d-flex flex-column justify-content-between">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/search/:search" element={<SearchContainer />} />
              <Route path="/category/:cat" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </CartContextProvider>
    </>
  );
}

export default App;
