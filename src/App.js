import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import { CatalogProvider } from './context/catalogContext';
import React from 'react';




export default class App extends React.Component {
  render() {
  return (
    <div className="App">
      <CatalogProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Catalog/>}></Route>
      </Routes>
      </CatalogProvider>
    </div>
  );
  }
}

