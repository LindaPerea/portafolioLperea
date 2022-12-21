import './App.css'
// import "bootswatch/dist/sketchy/bootstrap.min.css";

import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Proyects from './components/Proyects';
import About from './components/About';
import ProyectsLinda from './components/ProyectsLinda';
import NavBar from './components/NavBar';




function App() {
  

  return (
    <HashRouter>
<NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path='/proyects' element={<ProyectsLinda/>} />        
        <Route path="/about" element={<About/>} />
        
      </Routes>
    
    </HashRouter>
  )
}

export default App
