import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { Route, Routes } from 'react-router-dom';
import CatalogItem from './components/catalog/catalogItem/catalogItem';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CatalogItem/>}></Route>

      </Routes>



    </div>
  );
}

export default App;
