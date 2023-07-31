import React from 'react';

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LenguaProvider } from './context/LenguaProvider';
import { HomePage } from './components/Home/HomePage';
import { NavBar } from './components/NavBar/NavBar';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
        <LenguaProvider>
          <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </LenguaProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App
