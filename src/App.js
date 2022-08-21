import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import { CatalogProvider } from './context/catalogContext';
import React from 'react';
import { PriceProvider } from './context/priceContext';




export default class App extends React.Component {
  render() {
  return (
    <div className="App">
      <CatalogProvider>
        <PriceProvider>
          <Header/>
          <Routes>
            <Route path="/" element={<Catalog/>}></Route>
          </Routes>
        </PriceProvider>
      </CatalogProvider>
    </div>
  );
  }
}

