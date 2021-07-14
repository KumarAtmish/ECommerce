import React from "react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
// import Cart from "./Components/Cart"
import { CartProvider} from 'react-use-cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart'
import Header from "./Container/Header";
import Login from "./Container/Login"

function App() {
  return (
    <>
    <CartProvider>
        <Router >
        <Header />
          <Switch>
             <Route path='/home' component={Home} exact/>
             <Route path='/cart' component={Cart} exact/>
             <Route path='/' component={Login} exact/>
          </Switch>
      </Router>
      </CartProvider>
    </>
  );
}

export default App;
