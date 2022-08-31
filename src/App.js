import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Catalog from './components/catalog/catalog';
import { CatalogProvider } from './context/catalogContext';
import React from 'react';
import { PriceProvider } from './context/priceContext';
import ProductPage from './components/productpage/productpage';
import { ProductProvider } from './context/productContext';
import CatalogItem from './components/catalog/catalogItem/catalogItem';
import CartPage from './components/cartpage/cartpage';





export default class App extends React.Component {
  render() {
  return (
        <Router>
          <div className="App">
          <CatalogProvider>
            <PriceProvider>
              <ProductProvider>
              <Header/>
              <Switch>
                <Route path="/catalog">
                <Catalog/>
                </Route>
                <Route path="/cart">
                  <CartPage/>
                </Route>
              </Switch>
              </ProductProvider>
            </PriceProvider>
          </CatalogProvider>   
          </div>
        </Router>

  );
  }
}

