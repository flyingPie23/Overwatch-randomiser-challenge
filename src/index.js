import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router";


import './stylesheets/index.css';
import App from './pages/App.js';
import Openqueue from './pages/Openqueue.js'
import Patchnotes from './pages/Patchnotes.js';
import Nav from './components/Nav.js'
import reportWebVitals from './reportWebVitals';

import heros from './data/heros.json';
import patches from './data/patchnotes.json';

//console.log(heros.heros.filter((hero) => hero.role === "dps"))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/openqueue" element={<Openqueue char={heros.heros} />} />
        <Route path="/patchnotes" element={<Patchnotes notes={patches.notes} heros={heros.heros} />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
