import './App.css'
// import "bootswatch/dist/sketchy/bootstrap.min.css";

import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Proyects from './components/Proyects';
import About from './components/About';
import ProyectsLinda from './components/ProyectsLinda';




function App() {
  

  return (
    <HashRouter>

      <Routes>
        
        <Route path="/" element={<Home/>} />
        
        <Route path="/proyects" element={<Proyects/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/proyectslinda' element={<ProyectsLinda/>} />
      </Routes>
    
    </HashRouter>
  )
}

export default App
