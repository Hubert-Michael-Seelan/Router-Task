import './App.css';
import SoftDevPage from './components/softdev';
import FullStackPage from './components/Fullstack';
import ProductivePage from './components/productive';
import WebdevPage from './components/webdev';
import ProgramPage from './components/program';
import NavbarPage from './navbar'
import HeaderPage from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <hr />
      <NavbarPage />
      <hr />
      <HeaderPage />
      
     
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Fullstack" element={<FullStackPage />} />
      <Route path="/softdev" element={<SoftDevPage />} />
      <Route path="/productive" element={<ProductivePage />} />
      <Route path="/webdev" element={<WebdevPage />} />
      <Route path="/program" element={<ProgramPage />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
