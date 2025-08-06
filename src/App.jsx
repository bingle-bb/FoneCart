import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Products } from "./pages/product/Products";
import { Cart } from "./pages/cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import { Favourite } from "./pages/favourite/Favourite";
import { ProductDetail } from "./pages/product/ProductDetail";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/favourite" element={<Favourite />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
