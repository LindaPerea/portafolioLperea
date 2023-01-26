import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
// import About from './components/About';
import ProyectsLinda from './components/ProyectsLinda';
import NavBar from './components/NavBar';
import Servicios from './components/Servicios';


function App() {
  
  return (
    <HashRouter>
<NavBar />
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path='/proyects' element={<ProyectsLinda/>} />        
        <Route path="/servicios" element={<Servicios/>} />
        
      </Routes>
    
    </HashRouter>
  )
}

export default App
