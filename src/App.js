import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Review from './components/Review/Review';
// import Product from './components/Product/Product';

function App() {
  //'Object.key' or 'Object.values' 
  // const user ={name:'jamal', job:'chamar'};
  // const values = Object.values(user);//Object.key-->key gula pabo & Object.values-->key er valuegula pabo
  // console.log(values);

  return (
    <div>
      <Header></Header>
      {/* <Shop></Shop> */}
      {/* <Product></Product> */}
      <Router>
        <Switch>
            <Route path="/shop">
                <Shop></Shop>
            </Route>
            <Route path="/review">
            <Review></Review>
            </Route>
            <Route path="/inventory">
                <Inventory></Inventory>
            </Route>
            <Route exact path="/">
                <Shop></Shop>
            </Route>
            <Route path="/product/:productKey">
                <ProductDetail></ProductDetail>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
