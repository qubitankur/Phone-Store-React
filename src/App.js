import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Details from './components/Details';
function App() {
  return (
   <>
     <Navbar />
     <Switch>
       <Route path="/details" component={Details}/>
       <Route path="/store" component={Cart}/>
       <Route path="/" component={ProductList}/>
       <Route component={Default}>
       </Route>
     </Switch>
   </>
  );
}

export default App;
