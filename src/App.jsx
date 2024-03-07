import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Detalle from './Components/Detalle/Detalle';
import AboutMe from './Pages/About/AboutMe'; 
import UsersComponent from './Pages/Users/UsersComponent';
import ContactComponent from './Pages/Contact/ContactComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersComponent />} /> 
          <Route path="/contacts" element={<ContactComponent />} />
          <Route path="/fugitives/:id" element={<Detalle />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
