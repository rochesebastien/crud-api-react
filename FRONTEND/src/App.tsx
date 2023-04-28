import './App.css'

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);

import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Civilite from './pages/Civilite/Civilite';
import CreateContact from './pages/Contact/CreateContact/CreateContact';
import CreateCivilite from './pages/Civilite/CreateCivilite/CreateCivilite';



function App() {
  return (
    <>
      <div>
      <Navbar />
      <div className="page">
        <Routes>
                    
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/civilite" element={<Civilite />} />
          <Route path="/civilite/create" element={<CreateCivilite />} />
          <Route path="/civilite/:id" element={<CreateCivilite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/create" element={<CreateContact />} />
          <Route path="/contact/:id" element={<CreateContact />} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
