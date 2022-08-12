import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/catalog/catalog';
import { CatalogProvider } from './context/catalogContext';


function App() {
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

export default App;
