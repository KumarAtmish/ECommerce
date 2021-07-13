import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Cart from "./Components/Cart"
import { CartProvider} from 'react-use-cart';

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
