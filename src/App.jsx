

import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contacto.jsx';

function App() {
  

  return (
    <>
    <Router>
      <div className="bg-gray-800 min-h-screen flex">
         <Menu></Menu>

    <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
    </div>
    </Router>
    </>
  )
}

export default App
